import { FieldContextProvider } from '@noodlestan/context-ui';
import { createClassList, createComputedProps } from '@noodlestan/context-ui-primitives';
import { createField, createFieldMixin } from '@noodlestan/headless-ui';
import { type Component, mergeProps, splitProps } from 'solid-js';

import { Flex } from '../../../layout';
import { FieldLabel } from '../FieldLabel';

import styles from './Field.module.css';
import type { FieldProps } from './types';

export const Field: Component<FieldProps> = props => {
    const [locals, others] = splitProps(props, ['size', 'label']);
    const field = createField(others);

    const { elProps: fieldMixinProps } = createFieldMixin();

    const classList = createClassList(styles, 'Field', () => props.classList);
    const fieldProps = createComputedProps({
        classList,
    });
    const elProps = mergeProps(fieldMixinProps, field.elProps, fieldProps);

    return (
        <FieldContextProvider context={field.context}>
            <Flex direction="column" gap="s" {...elProps}>
                <FieldLabel size={locals.size} {...field.labelProps}>
                    {locals.label}
                </FieldLabel>
                <Flex direction="row" gap="s">
                    {props.children(field)}
                </Flex>
            </Flex>
        </FieldContextProvider>
    );
};
