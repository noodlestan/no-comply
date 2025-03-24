import { type Component, onMount } from 'solid-js';

import './Canvas.css';

export type CanvasProps = {
    onMount?: (canvas: HTMLCanvasElement) => void;
    autoresize?: boolean;
};

export const Canvas: Component<CanvasProps> = props => {
    let canvasRef: HTMLCanvasElement | undefined;

    const classList = () => ({ Canvas: true });

    onMount(() => {
        canvasRef?.focus();
        props.onMount?.(canvasRef as HTMLCanvasElement);
    });

    return (
        <div classList={classList()}>
            <canvas tabIndex="0" ref={canvasRef} />
        </div>
    );
};
