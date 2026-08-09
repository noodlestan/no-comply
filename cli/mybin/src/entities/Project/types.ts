import type { EntityDataBase } from '@purrception/primitives';

import type { WorkspaceEntityPartial } from '../types';

export type ProjectEntityPartial = WorkspaceEntityPartial & {
	type: 'project';
};

export type ProjectEntityDetails = {
	isWorkspace: boolean;
	workspaces: string[];
	packageName: string;
};

export type ProjectEntityData = ProjectEntityPartial & EntityDataBase & ProjectEntityDetails;

export type ProjectEntityFiles = {
	package: string;
};
