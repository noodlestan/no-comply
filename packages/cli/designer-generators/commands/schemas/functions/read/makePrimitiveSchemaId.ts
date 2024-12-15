import ts from 'typescript';

import { toKebabCase } from './toKebabCase';

export function makePrimitiveSchemaId(symbol: ts.Symbol): string {
    return `primitives/${toKebabCase(symbol.getName())}`;
}
