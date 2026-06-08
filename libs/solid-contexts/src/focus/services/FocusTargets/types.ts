import type { FocusTargetName } from '../../types';

export type FocusTargetsServiceAPI = {
	setTarget: (target: FocusTargetName, handler: () => void) => void;
	setFocus: (target: FocusTargetName) => void;
	unsetTarget: (target: FocusTargetName) => void;
	dispose: () => void;
};
