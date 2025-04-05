import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { FormRoleName } from '../../role';
import type { FormTagName } from '../../tag';
import type { AriaRegionElementProps } from '../region';

export type AriaFormProps = AriaLabelledProps & {
    component?: FormTagName;
    role?: FormRoleName;
};

export type AriaFormElementProps = Omit<AriaRegionElementProps, 'role'> & {
    component: FormTagName;
    role?: FormRoleName;
};

export interface AriaFormAPI {
    elProps: AriaFormElementProps;
    labelProps: AriaLabelElementProps;
}
