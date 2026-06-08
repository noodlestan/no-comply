import type {
	UIControllerCommand,
	UIControllerMessage,
	UIControllerMetaWithShortcuts,
} from '../../controller';
import type { ShortcutsServiceAPI } from '../services';
import type {
	KeyboardShortcut,
	ShortcutCommandController,
	ShortcutControllerMessage,
	ShortcutsControllerAPI,
} from '../types';

export const createShortcutsController = (
	service: ShortcutsServiceAPI,
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
	addShortcuts(meta.shortcuts as KeyboardShortcut[]);

	const dispose = () => {
		removeController(meta.name);
		removeShortcuts(meta.shortcuts as KeyboardShortcut[]);
	};

	const api: ShortcutsControllerAPI = {
		dispose,
	};

	return api;
};
