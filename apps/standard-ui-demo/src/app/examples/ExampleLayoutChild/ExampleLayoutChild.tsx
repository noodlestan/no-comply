import { type ClosedTagProps, mergeProps, staticClassList } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import styles from './ExampleLayoutChild.module.scss';

type Props = ClosedTagProps & {
    content?: string;
};

export const ExampleLayoutChild: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ['content']);

    const $localRoot = { classList: staticClassList(styles, 'ExampleLayoutChild') };

    const $ = mergeProps($others, $localRoot);

    return <div {...$}>{locals.content ?? 'Lorem ipsum'}</div>;
};
