import {
    ShortcutContextKey,
    ShortcutContextValue,
    ShortcutId,
    UICommandController,
    UIControllerName,
    UIShortcut,
} from '../types';

import { getEventKeyBinding, isKeyboardShortcut } from './helpers';
import {
    KeyboardShortcut,
    ShortcutControllerMessage,
    ShortcutKeyBinding,
    ShortcutsService,
} from './types';

const isContextActive = (
    contexts: Map<ShortcutContextKey, ShortcutContextValue>,
    when: Record<ShortcutContextKey, ShortcutContextValue>,
): boolean => {
    for (const [key, expectedValue] of Object.entries(when)) {
        const contextValue = contexts.get(key);
        if (contextValue !== expectedValue) {
            return false;
        }
    }
    return true;
};

export const createShortcutsService = (): ShortcutsService => {
    console.info('createShortcutsService()');

    const contexts = new Map<ShortcutContextKey, ShortcutContextValue>();
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

    const setContext = (key: ShortcutContextKey, value: ShortcutContextValue) => {
        contexts.set(key, value);
    };

    const unsetContext = (key: ShortcutContextKey) => {
        contexts.delete(key);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const shortcut = getEventKeyBinding(event);
        const bindingIds = reverseBindingsMap.get(shortcut);

        if (!bindingIds) {
            return;
        }
        for (const shortcutId of bindingIds) {
            const binding = shortcutsMap.get(shortcutId);
            if (!binding) {
                continue;
            }
            if (binding.when && !isContextActive(contexts, binding.when)) {
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
                ctrlKey: event.ctrlKey,
                shiftKey: event.shiftKey,
                altKey: event.altKey,
            };
            controller(message);
            break;
        }
    };

    const dispose = () => {
        contexts.clear();
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
        setContext,
        unsetContext,
        handleKeyDown,
        dispose,
    };

    return api;
};
