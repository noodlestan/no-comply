import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import type { AriaRoleName } from '../../types';
import { createAriaLabelled } from '../label';

import type { AriaGenericRegionAPI, AriaRegionAPI, AriaRegionProps } from './types';

export function createAriaRegion(props?: AriaRegionProps): AriaGenericRegionAPI;
export function createAriaRegion<T extends AriaRoleName = AriaRoleName>(
    props: AriaRegionProps,
    staticRole: T,
): AriaRegionAPI<T>;
export function createAriaRegion(
    props?: AriaRegionProps,
    staticRole?: AriaRoleName,
): AriaGenericRegionAPI {
    const { $root: $labelledRoot, $label, $description, hasLabel } = createAriaLabelled(props);

    const role = () => {
        if (!hasLabel()) {
            if (staticRole || props?.role) {
                throw new Error(`AriaRegionAPI: regions with a role requires a label`);
            }
        }
        return staticRole ?? props?.role;
    };
    const $localRoot = createComputedProps({
        role,
    });

    return {
        $root: mergeProps($labelledRoot, $localRoot),
        $label,
        $description,
    };
}
