import {
    UIControllerCommand,
    UIControllerMessage,
    UIControllerMetaWithShortcuts,
} from '../../../controllers';
import {
    ShortcutCommandController,
    ShortcutControllerMessage,
    ShortcutsControllerAPI,
    ShortcutsService,
} from '../types';

export const createShortcutsController = (
    service: ShortcutsService,
    meta: UIControllerMetaWithShortcuts,
    controllerOrControllerMap:
        | ShortcutCommandController
        | Record<UIControllerCommand, ShortcutCommandController>,
): ShortcutsControllerAPI => {
    const { addController, addShortcuts, removeController, removeShortcuts } = service;

    const errorPrefix = `Controller "${meta.name}"`;

    const isController = typeof controllerOrControllerMap === 'function';
    const controller = isController && controllerOrControllerMap;

    const handleMessage = (message: UIControllerMessage) => {
        if (!meta.commands[message.command]) {
            throw new Error(`${errorPrefix}: does not implement command "${message.command}".`);
        }
        if (controller) {
            controller(message as ShortcutControllerMessage);
        } else {
            const controller = controllerOrControllerMap[message.command];
            if (!controller) {
                throw new Error(`${errorPrefix} does map "${message.command}".`);
            }
            controller(message as ShortcutControllerMessage);
        }
    };

    addController(meta.name, handleMessage);
    addShortcuts(meta.shortcuts);

    const dispose = () => {
        removeController(meta.name);
        removeShortcuts(meta.shortcuts);
    };

    const api: ShortcutsControllerAPI = {
        dispose,
    };

    return api;
};
