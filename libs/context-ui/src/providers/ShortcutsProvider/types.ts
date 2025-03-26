import type {
    ShortcutId,
    UICommandController,
    UIControllerCommand,
    UIControllerMessage,
    UIControllerName,
    UIShortcut,
} from '../../controllers';

export type ShortcutKeyBinding = string; // e.g. alt+s

export type KeyboardShortcut = UIShortcut & {
    keyBinding: ShortcutKeyBinding;
};

export type KeyboardShortcutMeta = Partial<KeyboardShortcut> & {
    keyBinding: ShortcutKeyBinding;
    command: UIControllerCommand;
    comment?: string;
};

export type ShortcutsService = {
    setKeyBindings: (map: Map<ShortcutId, ShortcutKeyBinding>) => void;
    addController: (name: UIControllerName, controller: UICommandController) => void;
    removeController: (name: UIControllerName) => void;
    addShortcuts: (binding: UIShortcut[]) => void;
    removeShortcuts: (binding: UIShortcut[]) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    dispose: () => void;
};

export type ShortcutControllerMessage = UIControllerMessage & {
    id: ShortcutId;
    key: string;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
};

export type ShortcutCommandController = (message: ShortcutControllerMessage) => void;

export type ShortcutsControllerAPI = {
    dispose: () => void;
};
