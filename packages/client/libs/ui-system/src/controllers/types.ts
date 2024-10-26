import { Accessor } from 'solid-js';

import { IconComponent } from '../icons';

export type UIContextKey = string;

export type UIContextValue = boolean | string | undefined;

export type UIContextMap = Record<UIContextKey, UIContextValue>;

export type ShortcutId = string; // e.g.: 'editor-session.spawn-despawn'

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

export type UIParentController = {
    registerChildController: (name: UIControllerName, controller: UIChildController) => void;
    unregisterChildController: (name: UIControllerName) => void;
    childDidActivate: (name: UIControllerName) => void;
    getActiveChild: Accessor<UIControllerName | undefined>;
};

export type UIChildController = {
    isActive: Accessor<boolean>;
    activate: () => void;
    deactivate: () => void;
};
