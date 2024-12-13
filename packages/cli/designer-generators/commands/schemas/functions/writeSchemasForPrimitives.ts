import * as fs from 'fs';
import * as path from 'path';

import * as TJS from 'typescript-json-schema';

import { SymbolInfo } from '../types';

import { normalizeSchema } from './write/normalizeSchema';

export function writeSchemasForPrimitives(targetPath: string, infos: SymbolInfo[]): string[] {
    return infos
        .map(info => {
            const program = TJS.getProgramFromFiles([info.filePath], { types: [] });
            const schema = TJS.generateSchema(program, info.symbolName, {
                required: true,
                noExtraProps: true,
            });

            if (!schema) return null;

            const normalizedSchema = normalizeSchema(schema, info);

            const filePath = path.join(targetPath, `${info.schemaId}.json`);
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, JSON.stringify(normalizedSchema, null, 2));

            return filePath;
        })
        .filter(Boolean) as string[];
}
