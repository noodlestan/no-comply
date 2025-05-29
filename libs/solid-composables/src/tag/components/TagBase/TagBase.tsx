import {
    type OpenTagProps,
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import styles from './TagBase.module.css';
import { TAG_BASE_PROPS } from './constants';
import { type TagBaseProps } from './types';

const defaultProps: PickRequired<TagBaseProps, 'tag'> = {
    tag: 'div',
};

type Props = OpenTagProps & TagBaseProps;

export const TagBase: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, TAG_BASE_PROPS);

    const component = () => locals.tag ?? defaultProps.tag;
    const classList = createClassList(styles, 'TagBase');
    const $root = createComputedProps({
        classList,
        component,
    });
    const $ = mergeProps($others, $root);

    return <Dynamic {...$} />;
};
