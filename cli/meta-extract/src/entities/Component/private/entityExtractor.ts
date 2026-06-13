import type {
	ComponentEntityData,
	ComponentEntityFiles,
	ComponentEntityPartial,
} from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

export const entityExtractor: DirectoryEntityProcessor<
	ComponentEntityPartial,
	ComponentEntityFiles,
	ComponentEntityData
> = async (ctx, partial, files) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
	const program = await createProgram(programContext, files);

	const components = program.extractComponents(files.implementation);
	if (!components.length) {
		return [];
	}

	if (components[0].name !== partial.name) {
		return [];
	}

	const docs = program.extractDocs(files.index);
	const types = program.extractTypes([files.implementation, files.types]);
	const functions = program.extractFunctions(files.factory);

	const imported = program.extractImportedSymbols();
	const factory = functions[0];
	const component = components[0];
	const declared = program.indexDeclaredSymbols([factory, component], types);

	return [
		{
			context: entityContext,
			entity: {
				...partial,
				...docs,
				component: components[0].name,
				group: partial.module || 'misc',
				factory: functions[0].name,
				symbols: {
					imported,
					declared,
				},
			},
		},
	];
};
