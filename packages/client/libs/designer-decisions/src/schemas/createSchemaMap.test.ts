import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createSchemaMap } from './createSchemaMap';
import { SchemaData, SchemaId, SchemaMap } from './types';

const mockValidSchemaMap: SchemaMap = new Map<SchemaId, SchemaData>([
    ['schema1', { $id: 'schema1', type: 'object', properties: { key: { type: 'string' } } }],
    ['schema2', { $id: 'schema2', type: 'array', items: { type: 'number' } }],
]);

const mockInvalidSchemaMap = new Map<SchemaId, SchemaData>([
    ['schema1', { $id: 'schema1', invalidProp: 'not valid' }],
    ['schema2', { $id: 'schema2', $ref: 'schema3' }],
]);

describe('createSchemaMap', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('should create a SchemaLoader with valid schemas', () => {
        const schemaLoader = createSchemaMap(mockValidSchemaMap);
        const loadedSchemas = Array.from(schemaLoader.schemas);

        expect(loadedSchemas).toEqual(Array.from(mockValidSchemaMap.entries()));
        expect(loadedSchemas).not.toBe(mockValidSchemaMap.entries());
    });

    it('should throw an error when given an invalid schema map', () => {
        expect(() => createSchemaMap(mockInvalidSchemaMap)).toThrow('could not be resolved');
    });
});
