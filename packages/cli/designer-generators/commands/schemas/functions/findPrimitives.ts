import { SymbolInfo } from '../types';

import {
    createProgramForTypes,
    findTypeFiles,
    makePrimitiveSchemaId,
    mapProgramSymbols,
} from './read';

export function findPrimitives(paths: string[]): SymbolInfo[] {
    const files = findTypeFiles(paths);
    const program = createProgramForTypes(files);
    return mapProgramSymbols(program, symbol => ({
        symbolName: symbol.getName(),
        sourceType: 'primitives',
        schemaId: makePrimitiveSchemaId(symbol),
        filePath: symbol.declarations?.[0]?.getSourceFile().fileName ?? '',
        tjsParams: {},
    }));
}
