import type {
	UIController,
	UIControllerChildAPI,
	UIControllerContainer,
	UIControllerName,
	UIControllerParentAPI,
} from '../types';

import { createUIControllerChildAPI } from './createUIControllerChildAPI';
import { createUIControllerParentAPI } from './createUIControllerParentAPI';

export const createUIController = <T extends UIControllerChildAPI = UIControllerChildAPI>(
	parent: UIControllerParentAPI,
	container: UIControllerContainer<T>,
	name: UIControllerName,
): UIController<T> => {
	const [controllerAPI] = createUIControllerParentAPI<T>(container);
	const [childControllerAPI] = createUIControllerChildAPI(parent, name);

	const childDidActivate = (child: UIControllerName) => {
		controllerAPI.childDidActivate(child);
		childControllerAPI.activate();
	};

	const childOverrideStarted = (child: UIControllerName) => {
		controllerAPI.childOverrideStarted(child);
		childControllerAPI.startOverriding();
	};

	const childOverrideEnded = (child: UIControllerName) => {
		controllerAPI.childOverrideEnded(child);
		childControllerAPI.endOverriding();
	};

	const deactivate = () => {
		const activeChild = controllerAPI.getActiveChild();
		if (activeChild) {
			activeChild.deactivate();
		}
		childControllerAPI.deactivate();
		controllerAPI.unsetActiveChild();
	};

	const suspend = () => {
		const activeChild = controllerAPI.getActiveChild();
		if (activeChild) {
			activeChild.suspend();
		}
		childControllerAPI.suspend();
	};

	const resume = () => {
		const activeChild = controllerAPI.getActiveChild();
		if (activeChild) {
			activeChild.resume();
		}
		childControllerAPI.resume();
	};

	const api: UIController<T> = {
		...controllerAPI,
		childDidActivate,
		childOverrideStarted,
		childOverrideEnded,
		...childControllerAPI,
		deactivate,
		suspend,
		resume,
		container,
	};

	return api;
};
