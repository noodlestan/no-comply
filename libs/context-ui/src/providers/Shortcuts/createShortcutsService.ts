import type {
    ShortcutId,
    UICommandController,
    UIControllerName,
    UIShortcut,
} from '../../controllers';
import type { ContextsService } from '../Contexts';

import { getEventKeyBinding, isKeyboardShortcut } from './helpers';
import type {
    KeyboardShortcut,
    ShortcutControllerMessage,
    ShortcutKeyBinding,
    ShortcutsService,
} from './types';

export const createShortcutsService = (contexts: ContextsService): ShortcutsService => {
    console.info('createShortcutsService()');

    const { matchContext } = contexts;

    const controllers = new Map<UIControllerName, UICommandController>();
    const shortcutsMap = new Map<ShortcutId, KeyboardShortcut>();
    const reverseBindingsMap = new Map<ShortcutKeyBinding, ShortcutId[]>();

    const setKeyBindings = (map: Map<ShortcutId, ShortcutKeyBinding>) => {
        reverseBindingsMap.clear();
        map.forEach((shortcut, id) => {
            if (!reverseBindingsMap.has(shortcut)) {
                reverseBindingsMap.set(shortcut, []);
            }
            reverseBindingsMap.get(shortcut)?.push(id);
        });
    };

    const addController = (name: UIControllerName, controller: UICommandController) => {
        if (controllers.has(name)) {
            throw new Error(`Duplicate controller "${name}".`);
        }
        controllers.set(name, controller);
    };

    const removeController = (name: UIControllerName) => {
        if (!controllers.has(name)) {
            throw new Error(`Controller "${name}" not set.`);
        }
        controllers.delete(name);
    };

    const addShortcuts = (shortcuts: UIShortcut[]) => {
        for (const shortcut of shortcuts) {
            if (!isKeyboardShortcut(shortcut)) {
                continue;
            }
            shortcutsMap.set(shortcut.id, shortcut);

            if (!reverseBindingsMap.has(shortcut.keyBinding)) {
                reverseBindingsMap.set(shortcut.keyBinding, []);
            }

            const bindingIds = reverseBindingsMap.get(shortcut.keyBinding);
            if (bindingIds) {
                bindingIds.push(shortcut.id);
            }
        }
    };

    const removeShortcuts = (shortcuts: UIShortcut[]) => {
        for (const shortcut of shortcuts) {
            if (!isKeyboardShortcut(shortcut)) {
                continue;
            }
            shortcutsMap.delete(shortcut.id);

            if (!reverseBindingsMap.has(shortcut.keyBinding)) {
                continue;
            }
            const ids = reverseBindingsMap.get(shortcut.keyBinding);
            if (!ids) {
                continue;
            }
            const index = ids.indexOf(shortcut.id);
            if (index !== -1) {
                ids.splice(index, 1);
                if (ids.length === 0) {
                    reverseBindingsMap.delete(shortcut.keyBinding);
                }
            }
        }
    };

    const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.defaultPrevented) {
            return;
        }
        const shortcut = getEventKeyBinding(ev);
        const bindingIds = reverseBindingsMap.get(shortcut);

        if (!bindingIds) {
            return;
        }
        for (const shortcutId of bindingIds) {
            const binding = shortcutsMap.get(shortcutId);
            if (!binding) {
                continue;
            }
            if (binding.when && !matchContext(binding.when)) {
                continue;
            }
            const controller = controllers.get(binding.controller);
            if (!controller) {
                throw new Error(`Controller "${binding.controller}" not set.`);
            }
            const message: ShortcutControllerMessage = {
                id: binding.id,
                controller: binding.controller,
                command: binding.command,
                key: binding.keyBinding,
                ctrlKey: ev.ctrlKey,
                shiftKey: ev.shiftKey,
                altKey: ev.altKey,
            };
            controller(message);
            break;
        }
    };

    const dispose = () => {
        controllers.clear();
        shortcutsMap.clear();
        reverseBindingsMap.clear();
    };

    const api: ShortcutsService = {
        setKeyBindings,
        addController,
        removeController,
        addShortcuts,
        removeShortcuts,
        handleKeyDown,
        dispose,
    };

    return api;
};
