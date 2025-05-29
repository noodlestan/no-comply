import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ContentMessageAPI } from '@noodlestan/headless-ui';
import type { Accessor } from 'solid-js';

import type { CloseButtonProps } from '../../../action';
import type { FlexGap, LayoutPadding } from '../../../layout';
import type { ContentSize, SizeScale } from '../../../types';
import type { DisplayMixinVariant, TextVariant } from '../../../typography';

export type ContentMessageTemplateSize = 'small' | 'normal';
export type ContentMessageTemplateLength = 'compact' | 'full';

export type ContentMessageTemplateOwnProps = {
    onClose?: () => void;
    size?: ContentMessageTemplateSize;
    length?: ContentMessageTemplateLength;
};
export type ContentMessageTemplateProps = ContentMessageAPI & ContentMessageTemplateOwnProps;

export type ContentMessageTemplateAPI = {
    $root: ContentMessageAPI['$root'] & {
        classList: ClassList;
    };
    $title: ContentMessageAPI['$title'] & {
        classList: ClassList;
    };
    $description: ContentMessageAPI['$description'];
    iconProps: ContentMessageAPI['iconProps'] & {
        size: ContentSize;
        classList: ClassList;
    };
    alignmentHeight: Accessor<SizeScale>;
    padding: Accessor<LayoutPadding>;
    gap: Accessor<FlexGap>;
    titleVariant: Accessor<DisplayMixinVariant>;
    descriptionVariant: Accessor<TextVariant>;
    hasCloseButton: Accessor<boolean>;
    closeButtonSize: Accessor<CloseButtonProps['size']>;
};
