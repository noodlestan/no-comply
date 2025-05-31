import { createAriaRegion } from '@no-comply/solid-accessibility';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import type { ContentMessageAPI, ContentMessageProps } from './types';

export const createContentMessage = (props: ContentMessageProps): ContentMessageAPI => {
    const regionProps = combineProps(props, { labelled: true, described: true });
    const { $root: $regionRoot, $label, $description } = createAriaRegion(regionProps, 'note');

    const $root = computedProps({
        'data-message': () => props.variant,
    });

    const $title = computedProps({
        children: () => props.title,
    });

    const _icon = computedProps({
        icon: () => props.icon,
        'aria-label': () => props.variant, // WIP expose labels for i18n
    });

    return {
        $root: combineProps($regionRoot, $root),
        $title: combineProps($label, $title),
        $description,
        _icon,
    };
};
