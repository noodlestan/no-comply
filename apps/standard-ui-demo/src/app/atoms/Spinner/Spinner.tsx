import { createClassList } from '@no-comply/solid-primitives';
import { CircleDashedIcon } from 'lucide-solid';
import { type Component, Show } from 'solid-js';

import styles from './Spinner.module.scss';

type SpinnerProps = {
    size?: 's' | 'm' | 'l';
    speed?: 'slow' | 'medium' | 'fast';
    when: boolean;
};

export const Spinner: Component<SpinnerProps> = props => {
    const classList = createClassList(styles, () => [
        'Spinner',
        `size-${props.size ?? 's'}`,
        `speed-${props.speed ?? 'fast'}`,
    ]);

    return (
        <Show when={props.when}>
            <span classList={classList()}>
                <span class="-Icon">
                    <CircleDashedIcon />
                </span>
            </span>
        </Show>
    );
};
