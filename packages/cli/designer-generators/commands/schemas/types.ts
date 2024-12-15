export type SourceType = 'primitives' | 'decision-types';

export type SymbolInfo = {
    symbolName: string;
    sourceType: SourceType;
    schemaId: string;
    filePath: string;
    tjsParams: Record<string, unknown>;
};
