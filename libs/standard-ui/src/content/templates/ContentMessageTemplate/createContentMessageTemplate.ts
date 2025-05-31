import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
    staticClassList,
} from '@no-comply/solid-primitives';

import styles from './ContentMessageTemplate.module.scss';
import { $CONTENT_MESSAGE_TEMPLATE } from './constants';
import type { ContentMessageTemplateAPI, ContentMessageTemplateProps } from './types';

const defaultProps: PickRequired<ContentMessageTemplateProps, 'size' | 'length'> = {
    size: 'normal',
    length: 'full',
};

export const createContentMessageTemplate = (
    props: ContentMessageTemplateProps,
): ContentMessageTemplateAPI => {
    const [locals, expose] = createExposable($CONTENT_MESSAGE_TEMPLATE, props);

    const size = () => locals.size ?? defaultProps.size;
    const length = () => locals.length ?? defaultProps.length;
    const classList = createClassList(styles, () => ['ContentMessage', `length-${length()}`]);

    const $root = computedProps({
        classList,
    });

    const $title = {
        classList: staticClassList(styles, '-Title'),
    };

    const _iconSstatic = {
        classList: staticClassList(styles, '-Icon'),
    };
    const _icon = computedProps(_iconSstatic, {
        size,
    });

    const isSmall = () => locals.size === 'small';

    const alignmentHeight = () => (isSmall() ? 'xs' : 's');
    const padding = () => (isSmall() ? 'xs' : 's');
    const gap = () => (isSmall() ? 's' : 'm');
    const titleVariant = () => (isSmall() ? 'xs' : 's');

    const hasCloseButton = () => Boolean(locals.onClose);

    return exposeAPI(expose, '$root', {
        $root: combineProps(locals.$root, $root),
        $title: combineProps(locals.$title, $title),
        $description: locals.$description,
        _icon: combineProps(locals._icon, _icon),
        alignmentHeight,
        padding,
        gap,
        titleVariant,
        descriptionVariant: size,
        hasCloseButton,
        closeButtonSize: size,
    });
};
