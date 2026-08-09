export type FocusTarget = () => void;

export type FocusTargetName = {
	targetName: string;
};

export type FocusTargetConsumerAPI = [setFocus: () => void];

export type FocusTargetProducerAPI = [
	setTarget: (handler: () => void) => void,
	unsetTarget: () => void,
];
