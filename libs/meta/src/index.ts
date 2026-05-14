import type { EntityDataBase } from '@purrception/primitives';

// Static imports for build-time JSON inclusion
import metaSolidAccessibility from '../../solid-accessibility/dist/meta.json';
import metaSolidComposables from '../../solid-composables/dist/meta.json';
import metaSolidContexts from '../../solid-contexts/dist/meta.json';
import metaSolidPrimitives from '../../solid-primitives/dist/meta.json';
import metaStandardUI from '../../standard-ui/dist/meta.json';

export interface NoComplyMetaData {
	extracted: EntityDataBase[];
	entityByName: Record<string, EntityDataBase>;
}

export interface NoComplyMetaAPI {
	entities(): Promise<EntityDataBase[]>;
	entityByName<T extends EntityDataBase>(name: string): Promise<T | undefined>;
}

function indexEntitiesByName(extracted: EntityDataBase[]): NoComplyMetaData['entityByName'] {
	const byName: NoComplyMetaData['entityByName'] = {};

	for (const entity of extracted) {
		const name = entity.name;
		if (typeof name === 'string') {
			byName[name] = entity;
		}
	}
	return byName;
}

export function createNoComplyMetaService(): NoComplyMetaAPI {
	let loadPromise: Promise<NoComplyMetaData> | null = null;

	const privateReadAll = (): Promise<NoComplyMetaData> => {
		if (!loadPromise) {
			loadPromise = Promise.resolve().then(() => {
				const extracted = [
					...metaSolidAccessibility,
					...metaSolidComposables,
					...metaSolidContexts,
					...metaSolidPrimitives,
					...metaStandardUI,
				];

				const entityByName = indexEntitiesByName(extracted);
				return { extracted, entityByName };
			});
		}
		return loadPromise;
	};

	const entityByName = async <T extends EntityDataBase>(name: string): Promise<T | undefined> => {
		const { entityByName } = await privateReadAll();
		return entityByName[name] as T;
	};

	const entities = async (): Promise<EntityDataBase[]> => {
		const { extracted } = await privateReadAll();
		return extracted;
	};

	return {
		entities,
		entityByName,
	};
}
