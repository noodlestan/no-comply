import type { ClassList, PickRequired } from '@noodlestan/context-ui-types';
import type { ParentComponent } from 'solid-js';

import styles from './FieldsetLabelBase.module.css';

export const FieldsetLabel: ParentComponent<FieldsetLabelBaseProps> = props => {
    const classList = () => ({
        ...props.classList,
        FieldsetLabel: true,
        [`FieldsetLabel-size-${size()}`]: true,
    });

    return <label classList={classList()}>{props.children}</label>;
};
