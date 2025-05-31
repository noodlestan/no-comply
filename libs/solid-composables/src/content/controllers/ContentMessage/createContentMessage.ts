import { createAriaRegion } from '@no-comply/solid-accessibility';
import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import type { ContentMessageAPI, ContentMessageProps } from './types';

export const createContentMessage = (props: ContentMessageProps): ContentMessageAPI => {
    const regionProps = mergeProps(props, { labelled: true, described: true });
    const { $root: $regionRoot, $label, $description } = createAriaRegion(regionProps, 'note');

    const $root = computedProps({
        'data-message': () => props.variant,
    });

    const $title = computedProps({
        children: () => props.title,
    });

    const iconProps = computedProps({
        icon: () => props.icon,
        'aria-label': () => props.variant, // WIP expose labels for i18n
    });

    return {
        $root: mergeProps($regionRoot, $root),
        $title: mergeProps($label, $title),
        $description,
        iconProps,
    };
};
