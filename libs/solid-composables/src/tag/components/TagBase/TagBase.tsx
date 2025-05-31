import {
    type OpenTagProps,
    type PickRequired,
    combineProps,
    computedProps,
    staticClassList,
} from '@no-comply/solid-primitives';
import { type ParentComponent, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import styles from './TagBase.module.scss';
import { TAG_BASE_PROPS } from './constants';
import { type TagBaseProps } from './types';

const defaultProps: PickRequired<TagBaseProps, 'tag'> = {
    tag: 'div',
};

type Props = OpenTagProps & TagBaseProps;

export const TagBase: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, TAG_BASE_PROPS);

    const component = () => locals.tag ?? defaultProps.tag;
    const classList = staticClassList(styles, 'TagBase');
    const $static = { classList };
    const $root = computedProps($static, {
        component,
    });
    const $ = combineProps($others, $root);

    return <Dynamic {...$} />;
};
