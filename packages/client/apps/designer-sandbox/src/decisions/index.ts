import { loadSchemasFromPaths, validateSchemaMap } from '@noodlestan/designer-decisions';
import { SCHEMA_PATH } from '@noodlestan/designer-schemas';

// import data from '../../data/decisions/color.json';

export const loadDecisions = async (): Promise<void> => {
    const schemas = await loadSchemasFromPaths([SCHEMA_PATH]);
    const schemaMap = validateSchemaMap(schemas);
    // const validator = createDecisionValidator(schemaMap);
    // const decisions = createDecisionStore(validator, decisionData);

    // if (decisions.hasError()) {
    //     console.log(decisions.getError());
    // } else {
    //     console.log(decisions.listAll());
    // }
    console.info(schemaMap);
};
