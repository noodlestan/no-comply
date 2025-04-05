import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../../context';

export type FormFieldContextOptions = {
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    pending?: boolean;
};

export type FormFieldContext = BaseContext & {
    type: 'form-field';
    id: string;
    setInputRef: (el: HTMLElement) => void;
    isDisabled: Accessor<boolean>;
    isReadonly: Accessor<boolean>;
    isPending: Accessor<boolean>;
    isTouched: Accessor<boolean>;
    isModified: Accessor<boolean>;
    isInvalid: Accessor<boolean>;
    isSubmitted: Accessor<boolean>;
};
