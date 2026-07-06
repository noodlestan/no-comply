import type { ClassList } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import { debugMessage } from './private';
import type {
	AlignContextCleanupFunction,
	AlignFirstLineContext,
	AlignFirstLineContextOwnerAPI,
	AlignFirstLineContextValue,
} from './types';

export const createAlignFirstLineContext = (): AlignFirstLineContextValue => {
	const [targetProxy, setTargetProxy] = createSignal<ClassList>();
	const [measureProxy, setMeasureProxy] = createSignal<ClassList>();

	const registerTargetProxyClasslist = (classList: ClassList): AlignContextCleanupFunction => {
		setTargetProxy(current => {
			if (current) {
				console.warn(debugMessage('target', current));
				return current;
			}
			return classList;
		});
		return () => setTargetProxy(undefined);
	};

	const registerMeasureProxyClassist = (classList: ClassList): AlignContextCleanupFunction => {
		setMeasureProxy(current => {
			if (current) {
				console.warn(debugMessage('measure', current));
				return current;
			}
			return classList;
		});
		return () => setMeasureProxy(undefined);
	};

	const context: AlignFirstLineContext = {
		registerTargetProxyClasslist,
		registerMeasureProxyClassist,
	};

	const proxyClassList = () => {
		return { ...targetProxy(), ...measureProxy() };
	};

	const ownerAPI: AlignFirstLineContextOwnerAPI = {
		proxyClassList,
	};

	return [context, ownerAPI];
};
