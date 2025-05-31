import type { Accessor } from 'solid-js';

import type { AriaRoleName } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaRegionProps = AriaLabelledProps & {
    role?: AriaRoleName;
};

export type AriaRegionAPI<T extends AriaRoleName = AriaRoleName> = {
    $root: AriaLabelledAPI['$root'] & {
        role: T;
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    hasLabel: Accessor<boolean>;
};

export type AriaGenericRegionAPI = {
    $root: AriaLabelledAPI['$root'] & {
        role: AriaRoleName | undefined;
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    hasLabel: Accessor<boolean>;
};
