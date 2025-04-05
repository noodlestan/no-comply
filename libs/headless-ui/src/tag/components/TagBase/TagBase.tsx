import { type PickRequired, createClassList } from '@noodlestan/context-ui-types';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import styles from './TagBase.module.css';
import type { TagBaseProps } from './types';

const defaultProps: PickRequired<TagBaseProps, 'component'> = {
    component: 'div',
};

export const TagBase: ParentComponent<TagBaseProps> = props => {
    const [locals, elementProps] = splitProps(props, ['component', 'classList']);

    const tag = () => locals.component ?? defaultProps.component;

    const classList = createClassList(styles, 'TagBase', () => locals.classList);

    return <Dynamic {...elementProps} component={tag()} classList={classList()} />;
};
