import path from 'path';

import { createDecisionLoader, formatValidationError } from '@noodlestan/designer-decisions';
import { DESIGNER_DECISIONS_SCHEMAS } from '@noodlestan/designer-schemas';

const DECISION_DATA = path.resolve('./data/decisions');

const decisionLoader = createDecisionLoader(
    [DECISION_DATA],
    [DESIGNER_DECISIONS_SCHEMAS],
    async moduleName => `../../../../node_modules/${moduleName}`,
);

const loadDecisions = async () => {
    const store = await decisionLoader();
    if (store.hasErrors()) {
        store.allErrors().forEach(error => console.error(formatValidationError(error)));
    }
    console.info(`🐘 ${store.records().length} decisions, ${store.allErrors().length} errors`);
};

loadDecisions();
