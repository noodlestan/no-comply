import {
    type FormContextOptions,
    type FormContextValue,
    createFormContextPrivate,
} from '../../private';

export const createFormContext = (options: FormContextOptions = {}): FormContextValue => {
    return createFormContextPrivate(options);
};
