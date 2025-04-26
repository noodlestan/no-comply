import type { FormRoleName } from '../../role';
import type { FormTagName } from '../../tag';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionAPI } from '../region';

export type AriaFormProps = AriaLabelledProps & {
    tag?: FormTagName;
    role?: FormRoleName;
};

export interface AriaFormAPI {
    $root: Omit<AriaRegionAPI['$root'], 'role'> & {
        component: FormTagName;
        role?: FormRoleName;
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
}
