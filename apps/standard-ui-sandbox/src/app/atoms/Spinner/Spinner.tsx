import { createClassList } from '@noodlestan/context-ui-primitives';
import { CircleDashedIcon } from 'lucide-solid';
import { type Component, Show } from 'solid-js';

import styles from './Spinner.module.css';

type SpinnerProps = {
    size?: 's' | 'm' | 'l';
    speed?: 'slow' | 'medium' | 'fast';
    when: boolean;
};

export const Spinner: Component<SpinnerProps> = props => {
    const classList = createClassList(styles, () => [
        'Spinner',
        `Spinner-size-${props.size ?? 's'}`,
        `Spinner-speed-${props.speed ?? 'fast'}`,
    ]);

    return (
        <Show when={props.when}>
            <span classList={classList()}>
                <span class="Spinner--Icon">
                    <CircleDashedIcon />
                </span>
            </span>
        </Show>
    );
};
