import type {
    AriaFormAPI,
    AriaFormProps,
    AriaLabelledAPI,
    FormTagName,
} from '@no-comply/solid-accessibility';
import type { FormContext, FormContextOptions, FormContextValue } from '@no-comply/solid-contexts';

import type { PressableProps } from '../../../action';

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
