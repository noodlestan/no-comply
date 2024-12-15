import { SymbolInfo } from '../types';

import {
    createProgramForTypes,
    findTypeFiles,
    makeDecisionTypeSchemaId,
    mapProgramSymbols,
} from './read';

export function findDecisionTypes(paths: string[]): SymbolInfo[] {
    const files = findTypeFiles(paths);
    const program = createProgramForTypes(files);
    return mapProgramSymbols(program, symbol => ({
        symbolName: symbol.getName(),
        sourceType: 'decision-types',
        schemaId: makeDecisionTypeSchemaId(symbol),
        filePath: symbol.declarations?.[0]?.getSourceFile().fileName ?? '',
        tjsParams: {},
    }));
}
