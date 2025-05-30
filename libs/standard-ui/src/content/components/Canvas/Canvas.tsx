import { staticClassList } from '@no-comply/solid-primitives';
import { type Component, onMount } from 'solid-js';

import styles from './Canvas.module.scss';

export type CanvasProps = {
    onMount?: (canvas: HTMLCanvasElement) => void;
    autoresize?: boolean;
};

export const Canvas: Component<CanvasProps> = props => {
    let canvasRef: HTMLCanvasElement | undefined;

    onMount(() => {
        canvasRef?.focus();
        props.onMount?.(canvasRef as HTMLCanvasElement);
    });

    return (
        <div classList={staticClassList(styles, 'Canvas')}>
            <canvas tabIndex="0" ref={canvasRef} />
        </div>
    );
};
