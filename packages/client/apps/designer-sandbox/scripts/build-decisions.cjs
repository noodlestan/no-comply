const path = require('path');

const { createDecisionLoader, formatValidationError } = require('@noodlestan/designer-decisions');
const { DESIGNER_DECISIONS_SCHEMAS } = require('@noodlestan/designer-schemas');

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
