import {
    type PickRequired,
    combineProps,
    computedProps,
    createClassList,
    staticClassList,
} from '@no-comply/solid-primitives';

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
    const $root = computedProps({
        classList,
    });

    const $title = {
        classList: staticClassList(styles, '-Title'),
    };

    const iconStaticProps = {
        classList: staticClassList(styles, '-Icon'),
    };
    const iconProps = computedProps(iconStaticProps, {
        size,
    });

    const isSmall = () => props.size === 'small';

    const alignmentHeight = () => (isSmall() ? 'xs' : 's');
    const padding = () => (isSmall() ? 'xs' : 's');
    const gap = () => (isSmall() ? 's' : 'm');
    const titleVariant = () => (isSmall() ? 'xs' : 's');

    const hasCloseButton = () => Boolean(props.onClose);

    return {
        $root: combineProps(props.$root, $root),
        $title: combineProps(props.$title, $title),
        $description: props.$description,
        iconProps: combineProps(props.iconProps, iconProps),
        alignmentHeight,
        padding,
        gap,
        titleVariant,
        descriptionVariant: size,
        hasCloseButton,
        closeButtonSize: size,
    };
};
