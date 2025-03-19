import { CircleDashedIcon } from 'lucide-solid';
import { Component, Show } from 'solid-js';

import './Spinner.css';

type SpinnerProps = {
    size?: 's' | 'm' | 'l';
    speed?: 'slow' | 'medium' | 'fast';
    when: boolean;
};

export const Spinner: Component<SpinnerProps> = props => {
    const classList = () => ({
        Spinner: true,
        [`Spinner-size-${props.size || 's'}`]: true,
        [`Spinner-speed-${props.speed || 'fast'}`]: true,
    });
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
