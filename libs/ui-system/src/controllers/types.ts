import type { Accessor } from 'solid-js';

import type { IconComponent } from '../icons';

export type UIContextKey = string;

export type UIContextValue = boolean | string | undefined;

export type UIContextMap = Record<UIContextKey, UIContextValue>;

export type ShortcutId = string;

export type UIShortcut = {
    id: ShortcutId;
    controller: UIControllerName;
    command: UIControllerCommand;
    when?: UIContextMap;
};

export type UIControllerName = string;

export type UIControllerCommand = string;

export type UIControllerMessage = {
    controller: UIControllerName;
    command: UIControllerCommand;
    params?: unknown;
};

export type UIControllerCommandMeta = {
    name: UIControllerCommand;
    icon?: IconComponent;
    description?: string;
};

export type UIControllerMeta = {
    name: UIControllerName;
    commands: Record<string, UIControllerCommandMeta>;
    shortcuts?: UIShortcut[];
};

export type UIControllerMetaWithShortcuts = UIControllerMeta & {
    shortcuts: UIShortcut[];
};

export type UICommandController = (message: UIControllerMessage) => void;

export type UIControllerContainer<T extends UIControllerChildAPI = UIControllerChildAPI> = {
    controllers: Accessor<T[]>;
    getController: <C extends T = T>(name: UIControllerName) => C;
    addController: (name: UIControllerName, controller: T) => void;
    removeController: (name: UIControllerName) => void;
};

export type UIControllerChildAPI = {
    name: UIControllerName;
    isActive: Accessor<boolean>;
    isOverriding: Accessor<boolean>;
    isSuspended: Accessor<boolean>;
    activate: () => void;
    deactivate: () => void;
    startOverriding: () => void;
    endOverriding: () => void;
    suspend: () => void;
    resume: () => void;
};

export type UIControllerChildImplementation = {
    onActivate?: () => void;
    onDeactivate?: () => void;
    onStartOverriding?: () => void;
    onEndOverriding?: () => void;
    onSuspend?: () => void;
    onResume?: () => void;
};

export type UIControllerChildPrivate = {
    setImplementation: (implementation: UIControllerChildImplementation) => void;
};

export type UIControllerParentAPI<T extends UIControllerChildAPI = UIControllerChildAPI> = {
    getActiveChild: Accessor<T | undefined>;
    getOverridingChild: Accessor<T | undefined>;
    childDidActivate: (child: UIControllerName) => void;
    unsetActiveChild: () => void;
    childOverrideStarted: (child: UIControllerName) => void;
    childOverrideEnded: (child: UIControllerName) => void;
};

export type UIControllerParentImplementation = {
    childDidActivate?: (child: UIControllerName) => void;
    unsetActiveChild?: () => void;
    childOverrideStarted?: (child: UIControllerName) => void;
    childOverrideEnded?: (child: UIControllerName) => void;
};

export type UIControllerParentPrivate = {
    setImplementation: (implementation: UIControllerParentImplementation) => void;
};

export type UIControllerParent<T extends UIControllerChildAPI = UIControllerChildAPI> =
    UIControllerParentAPI<T> & {
        container: UIControllerContainer<T>;
    };

export type UIController<T extends UIControllerChildAPI = UIControllerChildAPI> =
    UIControllerParent<T> & UIControllerChildAPI;
