import type { UIControllerCommand, UIControllerMessage, UIShortcut } from '../controllers';

export type ShortcutId = string; // e.g. alt+s

export type ShortcutKeyBinding = string; // e.g. alt+s

export type KeyboardShortcut = UIShortcut & {
    keyBinding: ShortcutKeyBinding;
};

export type KeyboardShortcutMeta = Partial<KeyboardShortcut> & {
    keyBinding: ShortcutKeyBinding;
    command: UIControllerCommand;
    comment?: string;
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
