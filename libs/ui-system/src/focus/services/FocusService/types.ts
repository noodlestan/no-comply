export type FocusTargetId = {
    targetName: string;
};

export type FocusServiceAPI = {
    setTarget: (target: FocusTargetId, handler: () => void) => void;
    setFocus: (target: FocusTargetId) => void;
    unsetTarget: (target: FocusTargetId) => void;
    dispose: () => void;
};

export type FocusTargetConsumerAPI = [setFocus: () => void];

export type FocusTargetProducerAPI = [
    setTarget: (handler: () => void) => void,
    unsetTarget: () => void,
];
