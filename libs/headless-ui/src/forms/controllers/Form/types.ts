import type { FormContext, FormContextOptions, FormContextValue } from '@noodlestan/context-ui';
import type {
    AriaFormAPI,
    AriaFormProps,
    AriaLabelledAPI,
    FormTagName,
} from '@noodlestan/context-ui-aria';

import type { PressableProps } from '../../../actions';

export type FormProps = AriaFormProps &
    FormContextOptions & {
        tag?: FormTagName;
        onSubmit?: (form: FormAPI) => void;
    };

export type FormAPI = {
    $root: AriaFormAPI['$root'] & {
        onSubmit: () => void;
        'data-disabled': '' | undefined;
        'data-form-readonly': '' | undefined;
        'data-form-pending': '' | undefined;
        'data-form-touched': '' | undefined;
        'data-form-modified': '' | undefined;
        'data-form-invalid': '' | undefined;
        'data-form-submitted': '' | undefined;
        'data-form-feedback-enabled': '' | undefined;
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    $submitButton: PressableProps & {
        type: 'submit';
    };
    context: FormContext;
    contextValue: FormContextValue;
};
