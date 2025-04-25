export type ActiveContextsServiceAPI = {
    setContext: (key: UIContextKey, value: UIContextValue) => void;
    getContext: (key: UIContextKey) => UIContextValue | undefined;
    matchContext: (when: Record<UIContextKey, UIContextValue>) => boolean;
    unsetContext: (key: UIContextKey) => void;
    dispose: () => void;
};
