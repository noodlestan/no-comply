import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import type { AriaRoleName } from '../../types';
import { createAriaLabelled } from '../label';

import type { AriaGenericRegionAPI, AriaRegionAPI, AriaRegionProps } from './types';

export function createAriaRegion<T extends AriaRoleName = AriaRoleName>(
    props: AriaRegionProps,
    staticRole: T,
): AriaRegionAPI<T>;

export function createAriaRegion(
    props?: AriaRegionProps,
    staticRole?: AriaRoleName,
): AriaGenericRegionAPI {
    const {
        elProps: labelledProps,
        labelProps,
        descriptionProps,
        hasLabel,
    } = createAriaLabelled(props);

    const role = () => {
        if (!hasLabel()) {
            if (staticRole || props?.role) {
                throw new Error(`AriaRegionAPI: regions with a role requires a label`);
            }
        }
        return staticRole ?? props?.role ?? 'region';
    };

    const elProps = createComputedProps({
        role,
    });

    return {
        elProps: mergeProps(labelledProps, elProps),
        labelProps,
        descriptionProps,
    };
}
