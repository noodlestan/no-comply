import { resolveProjectMeta } from '../../helpers';

import type { ProjectEntityData, ProjectEntityPartial } from '.';

export function createProjectEntity(
	partial: ProjectEntityPartial,
	dirPath: string,
): ProjectEntityData {
	const meta = resolveProjectMeta(dirPath);

	const data: ProjectEntityData = {
		...partial,
		packageName: meta.packageName,
		path: dirPath,
		isWorkspace: meta.isWorkspace,
		workspaces: meta.workspaces,
		symbols: {
			declared: {},
			imported: {},
		},
	};

	return data;
}
