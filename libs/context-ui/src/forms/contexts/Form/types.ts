import type { Accessor } from 'solid-js';

import type { BaseContext } from '../../../context';

export type FormContextOptions = {
    disabled?: boolean;
    readonly?: boolean;
    pending?: boolean;
    enableFeedack?: boolean;
};

export type FormContext = BaseContext & {
    type: 'form';
    id: string;
    isDisabled: Accessor<boolean>;
    isReadonly: Accessor<boolean>;
    isPending: Accessor<boolean>;
    isTouched: Accessor<boolean>;
    isModified: Accessor<boolean>;
    isInvalid: Accessor<boolean>;
    isSubmitted: Accessor<boolean>;
    isFeedbackEnabled: Accessor<boolean>;
    submit: () => void;
    reset: () => void;
};
