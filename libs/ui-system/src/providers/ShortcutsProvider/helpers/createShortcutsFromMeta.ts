import { UIControllerName } from '../../types';
import { KeyboardShortcut, KeyboardShortcutMeta } from '../types';

export const createShortcutsfromMeta = (
    defaultController: UIControllerName,
    shortcutConfigs: KeyboardShortcutMeta[],
): KeyboardShortcut[] => {
    return shortcutConfigs.map(config => {
        const { id, keyBinding, controller: bindingController, command, when } = config;
        const controller = bindingController || defaultController;
        return {
            id: id || `${defaultController}.${config.command}`,
            keyBinding,
            controller: controller || defaultController,
            command,
            when,
        };
    });
};
