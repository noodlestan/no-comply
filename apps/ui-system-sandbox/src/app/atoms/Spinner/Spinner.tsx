import { FadeIn } from '@noodlestan/ui-system';
import { ApertureIcon } from 'lucide-solid';
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
                <FadeIn delay={0}>
                    <span class="Spinner--Icon">
                        <ApertureIcon />
                    </span>
                </FadeIn>
            </span>
        </Show>
    );
};
