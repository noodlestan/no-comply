import type { EntityDataBase } from '@purrception/primitives';

import type { WorkspaceEntityPartial } from '../types';

export type CheckoutEntityPartial = WorkspaceEntityPartial & {
	type: 'checkout';
	projectName: string;
};

export type CheckoutState = {
	branch: string;
	remote: string | null;
	isDirty: boolean;
	lastCommit: string;
};

export type CheckoutEntityData = CheckoutEntityPartial &
	EntityDataBase & {
		state: CheckoutState;
	};

export type CheckoutEntityFiles = {
	package: string;
	gitconfig: string;
};
