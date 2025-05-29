import type { UICommandController, UIControllerName } from '../../../controller';
import type { KeyboardShortcut, ShortcutId, ShortcutKeyBinding } from '../../types';

export type ShortcutsServiceAPI = {
    setKeyBindings: (map: Map<ShortcutId, ShortcutKeyBinding>) => void;
    addController: (name: UIControllerName, controller: UICommandController) => void;
    removeController: (name: UIControllerName) => void;
    addShortcuts: (binding: KeyboardShortcut[]) => void;
    removeShortcuts: (binding: KeyboardShortcut[]) => void;
    handleKeyDown: (ev: KeyboardEvent) => void;
    dispose: () => void;
};
