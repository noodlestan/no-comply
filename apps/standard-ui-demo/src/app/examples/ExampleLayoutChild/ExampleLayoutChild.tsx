import { type ClosedTagProps, combineProps, staticClassList } from '@no-comply/solid-primitives';
import { type Component, splitProps } from 'solid-js';

import styles from './ExampleLayoutChild.module.scss';

type Props = ClosedTagProps & {
    content?: string;
};

export const ExampleLayoutChild: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ['content']);

    const $root = {
        classList: staticClassList(styles, 'ExampleLayoutChild'),
    };

    const $ = combineProps($others, $root);

    return <div {...$}>{locals.content ?? 'Lorem ipsum'}</div>;
};
