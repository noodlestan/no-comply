import { UIControllerMessage, UIControllerMetaWithShortcuts } from '../../types';
import {
    ShortcutCommandController,
    ShortcutControllerMessage,
    ShortcutsControllerAPI,
} from '../types';
import { useShortcuts } from '../useShortcuts';

export const createShortcutsController = (
    meta: UIControllerMetaWithShortcuts,
    doMessage: ShortcutCommandController,
): ShortcutsControllerAPI => {
    const { addController, addShortcuts, removeController, removeShortcuts } = useShortcuts();

    const handleMessage = (message: UIControllerMessage) => {
        if (!meta.commands[message.command]) {
            throw new Error(
                `Controller "${meta.name}" does not implement command "${message.command}".`,
            );
        }
        doMessage(message as ShortcutControllerMessage);
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
