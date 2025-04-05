import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { AriaAttributes, AriaRoleName } from '../../types';

export type AriaRegionProps = AriaLabelledProps & {
    role?: AriaRoleName;
};

export type AriaRegionElementProps<T extends AriaRoleName = AriaRoleName> = Pick<
    AriaAttributes,
    'aria-label' | 'aria-labelledby'
> & {
    role: T;
};

export type AriaRegionAPI<T extends AriaRoleName = AriaRoleName> = {
    elProps: AriaRegionElementProps<T>;
    labelProps: AriaLabelElementProps;
};
