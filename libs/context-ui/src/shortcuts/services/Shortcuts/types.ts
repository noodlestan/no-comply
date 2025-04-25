import type { ShortcutId, ShortcutKeyBinding } from '../../types';

export type ShortcutsServiceAPI = {
    setKeyBindings: (map: Map<ShortcutId, ShortcutKeyBinding>) => void;
    addController: (name: UIControllerName, controller: UICommandController) => void;
    removeController: (name: UIControllerName) => void;
    addShortcuts: (binding: UIShortcut[]) => void;
    removeShortcuts: (binding: UIShortcut[]) => void;
    handleKeyDown: (ev: KeyboardEvent) => void;
    dispose: () => void;
};
