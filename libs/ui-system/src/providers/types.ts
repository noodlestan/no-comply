export type ShortcutId = string; // e.g.: 'editor-session.spawn-despawn'

export type ShortcutContextKey = string;

export type ShortcutContextValue = boolean | string;

export type ShortcutContextMap = Record<ShortcutContextKey, ShortcutContextValue>;

export type UIShortcut = {
    id: ShortcutId;
    controller: UIControllerName;
    command: UIControllerCommand;
    when?: ShortcutContextMap;
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
