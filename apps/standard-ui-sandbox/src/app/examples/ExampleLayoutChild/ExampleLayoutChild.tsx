import {
    type ClosedTagProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';
import { type Component, splitProps } from 'solid-js';

import styles from './ExampleLayoutChild.module.css';

type Props = ClosedTagProps & {
    content?: string;
    width?: number;
    stretch?: boolean;
};

export const ExampleLayoutChild: Component<Props> = props => {
    const [locals, $others] = splitProps(props, ['content']);

    const classList = staticClassList(styles, 'ExampleLayoutChild');
    const style = () => ({
        width: props.width ? `${props.width}px` : 'auto',
        height: props.stretch ? `100%` : 'auto',
    });
    const $root = {
        classList,
    };

    const $ = mergeProps($others, $root);

    return (
        <div {...$} style={style()}>
            {locals.content || 'Lorem ipsum'}
        </div>
    );
};
