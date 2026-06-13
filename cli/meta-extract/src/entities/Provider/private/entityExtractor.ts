import type {
	ProviderEntityData,
	ProviderEntityFiles,
	ProviderEntityPartial,
} from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

export const entityExtractor: DirectoryEntityProcessor<
	ProviderEntityPartial,
	ProviderEntityFiles,
	ProviderEntityData
> = async (ctx, partial, files) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
	const program = await createProgram(programContext, files);

	const docs = program.extractDocs(files.index);
	const components = program.extractComponents(files.implementation);
	const hooks = program.extractFunctions(files.hooks);
	const types = program.extractTypes(files.implementation);

	const imported = program.extractImportedSymbols();
	const declared = program.indexDeclaredSymbols(components, hooks, types);

	return [
		{
			context: entityContext,
			entity: {
				...partial,
				...docs,
				components: components.map(component => component.name),
				hooks: hooks.map(hook => hook.name),
				symbols: {
					imported,
					declared,
				},
			},
		},
	];
};
