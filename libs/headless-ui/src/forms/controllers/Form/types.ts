import type { FormContext, FormContextOptions } from '@noodlestan/context-ui';
import type {
    AriaFormElementProps,
    AriaFormProps,
    AriaLabelElementProps,
    FormTagName,
} from '@noodlestan/context-ui-aria';

import type { PressableProps } from '../../../actions';

export type FormProps = AriaFormProps &
    FormContextOptions & {
        component?: FormTagName;
        tabIndex?: number;
    };

export type FormContainerProps = AriaFormElementProps & {
    'data-disabled': '' | undefined;
    'data-form-readonly': '' | undefined;
    'data-form-pending': '' | undefined;
    'data-form-touched': '' | undefined;
    'data-form-modified': '' | undefined;
    'data-form-invalid': '' | undefined;
    'data-form-submitted': '' | undefined;
    'data-form-feedback-enabled': '' | undefined;
};

export type FormAPI = {
    containerProps: FormContainerProps;
    labelProps: AriaLabelElementProps;
    submitButtonProps: PressableProps;
    context: FormContext;
};
