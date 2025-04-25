import type { SwitchTagName } from '../../tag';
import type { AriaAttributes } from '../../types';
import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionElementProps } from '../region';

export type AriaSwitchProps = AriaLabelledProps & {
    component: SwitchTagName;
    checked: boolean;
    disabled: boolean;
};

export interface AriaSwitchAPI {
    elProps: AriaRegionElementProps & {
        role: 'switch';
        type: 'button' | 'checkbox' | undefined;
        component: SwitchTagName;
        'aria-checked': AriaAttributes['aria-checked'];
        'aria-disabled': AriaAttributes['aria-disabled'];
        'data-disabled': '' | undefined;
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
}
