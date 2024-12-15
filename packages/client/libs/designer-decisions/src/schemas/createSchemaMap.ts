import { validateSchemas } from './private';
import { SchemaData, SchemaId, SchemaMap } from './types';

type SchemaLoader = {
    readonly schemas: Iterable<[SchemaId, SchemaData]>;
};

export const createSchemaMap = (schemas: SchemaMap): SchemaLoader => {
    validateSchemas(schemas);

    const getSchemas = () => structuredClone(Array.from(schemas.entries()));

    const api = {};
    Object.defineProperty(api, 'schemas', { get: getSchemas });

    return api as SchemaLoader;
};
