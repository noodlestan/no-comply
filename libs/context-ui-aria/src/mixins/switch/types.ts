import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { SwitchTagName } from '../../tag';
import type { AriaAttributes } from '../../types';
import type { AriaRegionElementProps } from '../region';

export type AriaSwitchProps = AriaLabelledProps & {
    component: SwitchTagName;
    checked: boolean;
    disabled: boolean;
};

export type AriaSwitchElementProps = AriaRegionElementProps & {
    role: 'switch';
    type: 'button' | 'checkbox' | undefined;
    component: SwitchTagName;
    'aria-checked': AriaAttributes['aria-checked'];
    'aria-disabled': AriaAttributes['aria-disabled'];
    'data-disabled': '' | undefined;
};

export interface AriaSwitchAPI {
    elProps: AriaSwitchElementProps;
    labelProps: AriaLabelElementProps;
}
