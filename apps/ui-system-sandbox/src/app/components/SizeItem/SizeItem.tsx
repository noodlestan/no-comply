/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { DataItem, Flex, Surface } from '@noodlestan/ui-system';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { type Component, Show, createSignal, onMount } from 'solid-js';

import './SizeItem.css';

type SizeItemProps = object;

export const SizeItem: Component<SizeItemProps> = () => {
    let spanRef!: HTMLSpanElement;

    const [expanded, setExpanded] = createSignal(false);

    const [rect, setRect] = createSignal({
        height: 0,
        width: 0,
    });

    const handleResize = ({ width, height }: DOMRectReadOnly, el: Element) => {
        if (el === spanRef) {
            setRect({ width: Math.ceil(width), height: Math.ceil(height) });
        }
    };

    const handleClick = () => setExpanded(e => !e);

    onMount(() => createResizeObserver(spanRef, handleResize));

    return (
        <div
            classList={{
                SizeItem: true,
                [`SizeItem-expanded`]: expanded(),
            }}
        >
            {/* <p class="SizeItem--Token">{props.source.name}</p> */}
            <span
                role="button"
                ref={spanRef}
                onClick={handleClick}
                class="SizeItem--Value"
                style={
                    {
                        // 'min-width': props.source.token[0],
                        // width: props.source.token[0],
                        // height: props.source.token[0],
                    }
                }
            >
                {rect().width}
            </span>
            <Show when={expanded()}>
                <Surface variant="banner" classList={{ 'SizeItem--Source': true }}>
                    <Flex padding="s" gap="s">
                        <DataItem label="token" size="s">
                            {/* {props.source.token?.join(' ')} */}
                        </DataItem>
                    </Flex>
                </Surface>
            </Show>
        </div>
    );
};
