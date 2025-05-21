import {
    type ClosedTagProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import { type Component, For, splitProps } from 'solid-js';

import { ExampleLayoutChild } from '../ExampleLayoutChild';

import styles from './ExampleLayoutContents.module.css';

type Props = ClosedTagProps & {
    count?: number;
    title?: string;
    width?: number;
};

export const ExampleLayoutContents: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ['count', 'title']);

    const classList = staticClassList(styles, 'ExampleLayoutContents');

    const $root = {
        classList,
    };

    const $ = mergeProps($others, $root);

    const items = () => {
        return Array(locals.count || 3)
            .fill('')
            .map((_, index) => `${locals.title || 'Item'} ${index + 1}`);
    };

    return <For each={items()}>{item => <ExampleLayoutChild {...$} content={item} />}</For>;
};
