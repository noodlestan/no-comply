import type { FormFieldContext, FormFieldContextOptions } from '@noodlestan/context-ui';

export type FormFieldProps = FormFieldContextOptions;

export type FormFieldContainerProps = object;

export type FormFieldLabelProps = {
    for: string;
};

export type FormFieldHintProps = object;

export type FormFieldInputProps = object;

export type FormFieldFeedbackProps = object;

export type FormFieldAPI = {
    containerProps: FormFieldContainerProps;
    labelProps: FormFieldLabelProps;
    hintProps: FormFieldHintProps;
    inputProps: FormFieldInputProps;
    feedbackProps: FormFieldFeedbackProps;
    context: FormFieldContext;
};
