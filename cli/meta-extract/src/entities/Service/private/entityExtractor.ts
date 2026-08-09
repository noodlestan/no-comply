import type { ServiceEntityData, ServiceEntityFiles, ServiceEntityPartial } from '@no-comply/meta';
import { createProgram, createProgramFilesContext } from '@purrception/lang-ts-extract';
import { type DirectoryEntityProcessor, createEntityExtractContext } from '@purrception/source-fs';

export const entityExtractor: DirectoryEntityProcessor<
	ServiceEntityPartial,
	ServiceEntityFiles,
	ServiceEntityData
> = async (ctx, partial, files) => {
	const entityContext = createEntityExtractContext(ctx, partial);
	const programContext = createProgramFilesContext(ctx.dirMeta.path, ctx.readFile);
	const program = await createProgram(programContext, files);

	const docs = program.extractDocs(files.index);
	const functions = program.extractFunctions(files.implementation);
	const types = program.extractTypes();

	const imported = program.extractImportedSymbols();
	const declared = program.indexDeclaredSymbols(functions, types);

	return [
		{
			context: entityContext,
			entity: {
				...partial,
				...docs,
				factories: functions.map(func => func.name),
				symbols: {
					imported,
					declared,
				},
			},
		},
	];
};
