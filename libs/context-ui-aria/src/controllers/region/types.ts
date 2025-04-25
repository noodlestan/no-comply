import type { AriaRoleName } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';

export type AriaRegionProps = AriaLabelledProps & {
    role?: AriaRoleName;
};

export type AriaRegionElementProps<T extends AriaRoleName = AriaRoleName> =
    AriaLabelledAPI['elProps'] & {
        role: T;
    };

export type AriaRegionAPI<T extends AriaRoleName = AriaRoleName> = {
    elProps: AriaRegionElementProps<T>;
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
};

export type AriaGenericRegionAPI = {
    elProps: AriaLabelledAPI['elProps'] & {
        role: AriaRoleName | undefined;
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
};
