import type { FormRoleName } from '../../role';
import type { FormTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionElementProps } from '../region';

export type AriaFormProps = AriaLabelledProps & {
    component?: FormTagName;
    role?: FormRoleName;
};

export interface AriaFormAPI {
    elProps: Omit<AriaRegionElementProps, 'role'> & {
        component: FormTagName;
        role?: FormRoleName;
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
}
