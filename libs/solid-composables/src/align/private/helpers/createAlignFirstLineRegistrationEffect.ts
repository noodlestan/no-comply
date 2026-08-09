import type { ClassList } from '@no-comply/solid-primitives';
import { createEffect, onCleanup } from 'solid-js';
import type { Accessor } from 'solid-js';

import type { AlignContextCleanupFunction } from '../../contexts';
import type { AlignedToFirstLineMixinProps } from '../../mixins';
import { useAlignFirstLineContextMaybe } from '../providers';

export const createAlignFirstLineRegistrationEffect = (
	props: AlignedToFirstLineMixinProps,
	classList: Accessor<ClassList>,
): void => {
	const context = useAlignFirstLineContextMaybe();
	if (!context) {
		return;
	}

	let cleanup: AlignContextCleanupFunction | undefined;

	createEffect(() => {
		const type = props.alignFirstLine;
		const isTargetOrMeasure = typeof type === 'string';
		if (isTargetOrMeasure) {
			const c = classList();
			cleanup =
				type === 'target'
					? context.registerTargetProxyClasslist(c)
					: context.registerMeasureProxyClassist(c);
		} else if (!isTargetOrMeasure) {
			cleanup?.();
			cleanup = undefined;
		}
	});

	onCleanup(() => {
		cleanup?.();
	});
};
