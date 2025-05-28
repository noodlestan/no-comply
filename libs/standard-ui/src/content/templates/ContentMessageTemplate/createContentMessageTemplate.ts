import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-primitives';

import styles from './ContentMessageTemplate.module.scss';
import type { ContentMessageTemplateAPI, ContentMessageTemplateProps } from './types';

const defaultProps: PickRequired<ContentMessageTemplateProps, 'size' | 'length'> = {
    size: 'normal',
    length: 'full',
};

export const createContentMessageTemplate = (
    props: ContentMessageTemplateProps,
): ContentMessageTemplateAPI => {
    const size = () => props.size ?? defaultProps.size;
    const length = () => props.length ?? defaultProps.length;
    const classList = createClassList(styles, () => ['ContentMessage', `length-${length()}`]);
    const $localRoot = createComputedProps({
        classList,
    });

    const $title = {
        classList: staticClassList(styles, 'ContentMessage--Title'),
    };

    const iconStaticProps = {
        classList: staticClassList(styles, 'ContentMessage--Icon'),
    };
    const iconProps = createComputedProps(iconStaticProps, {
        size,
    });

    const isSmall = () => props.size === 'small';

    const alignmentHeight = () => (isSmall() ? 'xs' : 's');
    const padding = () => (isSmall() ? 'xs' : 's');
    const gap = () => (isSmall() ? 's' : 'm');
    const titleVariant = () => (isSmall() ? 'xs' : 's');

    const hasCloseButton = () => Boolean(props.onClose);

    return {
        $root: mergeProps(props.$root, $localRoot),
        $title: mergeProps(props.$title, $title),
        $description: props.$description,
        iconProps: mergeProps(props.iconProps, iconProps),
        alignmentHeight,
        padding,
        gap,
        titleVariant,
        descriptionVariant: size,
        hasCloseButton,
        closeButtonSize: size,
    };
};
