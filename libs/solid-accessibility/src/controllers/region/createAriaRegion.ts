import { combineProps, computedProps } from '@no-comply/solid-primitives';

import type { AriaRoleName } from '../../role';
import { createAriaLabelled } from '../label';

import type { AriaGenericRegionAPI, AriaRegionAPI, AriaRegionProps } from './types';

/**
 * Creates an ARIA region controller with a dynamic role.
 */
export function createAriaRegion(props?: AriaRegionProps): AriaGenericRegionAPI;
/**
 * Creates an ARIA region controller with a static ARIA role.
 * @param staticRole If provided, `props.role` is ignored
 */
export function createAriaRegion<T extends AriaRoleName = AriaRoleName>(
	props: AriaRegionProps,
	staticRole: T,
): AriaRegionAPI<T>;
/**
 * @ignore
 */
export function createAriaRegion(
	props?: AriaRegionProps,
	staticRole?: AriaRoleName,
): AriaGenericRegionAPI {
	const { $root: $labelledRoot, $label, $description, hasLabel } = createAriaLabelled(props);

	const role = () => {
		if (!hasLabel()) {
			if (staticRole || props?.role) {
				console.error('AriaRegionAPI: when role is set, label or aria-labelledby are required.');
			}
		}
		return staticRole ?? props?.role;
	};
	const $root = computedProps({
		role,
	});

	return {
		$root: combineProps($labelledRoot, $root),
		$label,
		$description,
		hasLabel,
	};
}
