import { DESIGNER_DECISIONS_SCHEMA_CONFIG } from '@noodlestan/designer-decisions';
import { createSchemaGenerator } from '@noodlestan/designer-generators';

const TARGET_DIR = './schemas';
const SCHEMAS = [DESIGNER_DECISIONS_SCHEMA_CONFIG];

async function run() {
    try {
        const resolver = async (moduleName: string) => {
            return `../../../../node_modules/${moduleName}`;
        };
        const generator = createSchemaGenerator(TARGET_DIR, SCHEMAS, resolver);
        generator.on('event', event => {
            if (event.type === 'generated') {
                console.info(' -', event.value);
            } else {
                console.info(event.value);
            }
        });
        await generator.discover();
        console.info('🔥 Generating schemas');
        const files = await generator.generate();
        console.info(`🐘 Generated ${files.length} schemas`);
    } catch (error) {
        console.error(error);
    }
}

run();
