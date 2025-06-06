export type FocusTargetName = {
	targetName: string;
};

export type FocusTargetsServiceAPI = {
	setTarget: (target: FocusTargetName, handler: () => void) => void;
	setFocus: (target: FocusTargetName) => void;
	unsetTarget: (target: FocusTargetName) => void;
	dispose: () => void;
};

export type FocusTargetConsumerAPI = [setFocus: () => void];

export type FocusTargetProducerAPI = [
	setTarget: (handler: () => void) => void,
	unsetTarget: () => void,
];
