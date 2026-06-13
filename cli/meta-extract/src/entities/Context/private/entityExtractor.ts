import type { ContextEntityData, ContextEntityFiles, ContextEntityPartial } from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

export const entityExtractor: DirectoryEntityProcessor<
	ContextEntityPartial,
	ContextEntityFiles,
	ContextEntityData
> = async (ctx, partial, files) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
	const program = await createProgram(programContext, files);

	const docs = program.extractDocs(files.index);
	const functions = program.extractFunctions(files.implementation);
	const types = program.extractTypes(files.types);

	const imported = program.extractImportedSymbols();
	const declared = program.indexDeclaredSymbols(functions, types);

	return [
		{
			context: entityContext,
			entity: {
				...partial,
				...docs,
				factories: functions.map(factory => factory.name),
				symbols: {
					imported,
					declared,
				},
			},
		},
	];
};
