import type { ModuleEntityData, ModuleEntityFiles, ModuleEntityPartial } from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

export const entityExtractor: DirectoryEntityProcessor<
	ModuleEntityPartial,
	ModuleEntityFiles,
	ModuleEntityData
> = async (ctx, partial, files) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
	const program = await createProgram(programContext, files);

	const docs = program.extractDocs(files.index);
	const helpers = program.extractFunctions(files.helpers);
	const types = program.extractTypes(files.types);

	const imported = program.extractImportedSymbols();
	const declared = program.indexDeclaredSymbols(helpers, types);

	return [
		{
			context: entityContext,
			entity: {
				...partial,
				...docs,
				helpers: helpers.map(helper => helper.name),
				symbols: {
					imported,
					declared,
				},
			},
		},
	];
};
