export type FocusTarget = {
    targetName: string;
};

export type FocusServiceAPI = {
    setTarget: (target: FocusTarget, handler: () => void) => void;
    setFocus: (target: FocusTarget) => void;
    unsetTarget: (target: FocusTarget) => void;
    dispose: () => void;
};

export type FocusAPI = [
    setTarget: (target: () => void) => void,
    unsetTarget: () => void,
    setFocus: () => void,
];

export type FocusClientAPI = [setFocus: () => void];
