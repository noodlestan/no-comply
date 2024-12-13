import { rimraf } from 'rimraf';

import { findDecisionTypes, findPrimitives, writeSchemasForDecisionTypes } from './functions';
import { writeSchemasForPrimitives } from './functions/writeSchemasForPrimitives';

const PATH_PRIMITIVES = '../../client/libs/designer-decisions/src/types/primitives';
const PATH_DECISION_TYPES = '../../client/libs/designer-decisions/src/types/decision-types';

const PATH_TARGET = './generated/schemas';

async function main() {
    await rimraf(PATH_TARGET);

    console.info('📂 Input paths:');
    console.info(` - Primitives: ${PATH_PRIMITIVES}`);
    console.info(` - Decision Types: ${PATH_DECISION_TYPES}`);

    const primitiveInfos = findPrimitives([PATH_PRIMITIVES]);
    const decisionTypeInfos = findDecisionTypes([PATH_DECISION_TYPES]);

    console.info(`\n🔍 Discovered ${primitiveInfos.length} primitives`);
    primitiveInfos.forEach(primitiveInfo =>
        console.info(' - ', primitiveInfo.symbolName, '...', primitiveInfo.schemaId),
    );

    console.info(`\n🔍 Discovered ${decisionTypeInfos.length} decision types`);
    decisionTypeInfos.forEach(decisionTypeInfo =>
        console.info(' - ', decisionTypeInfo.symbolName, '...', decisionTypeInfo.schemaId),
    );

    const primitiveFiles = writeSchemasForPrimitives(PATH_TARGET, primitiveInfos);
    const decisionTypeFiles = writeSchemasForDecisionTypes(PATH_TARGET, decisionTypeInfos);

    console.info(`\n📁 Generated ${primitiveFiles.length} primitive schemas`);
    primitiveFiles.forEach(file => console.info(` - ${file}`));

    console.info(`\n📁 Generated ${decisionTypeFiles.length} decision type schemas`);
    decisionTypeFiles.forEach(file => console.info(` - ${file}`));
}

main();
