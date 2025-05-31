import type { ContentMessageAPI } from '@no-comply/solid-composables';
import type { ExposedDataProps } from '@no-comply/solid-contexts';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { CloseButtonProps } from '../../../action';
import type { FlexGap, LayoutPadding } from '../../../layout';
import type { ContentSize, SizeScale } from '../../../types';
import type { DisplayVariant, TextVariant } from '../../../typography';

export type ContentMessageTemplateSize = 'small' | 'normal';
export type ContentMessageTemplateLength = 'compact' | 'full';

export type ContentMessageTemplateOwnProps = {
    onClose?: () => void;
    size?: ContentMessageTemplateSize;
    length?: ContentMessageTemplateLength;
};
export type ContentMessageTemplateProps = ExposedDataProps &
    ContentMessageAPI &
    ContentMessageTemplateOwnProps;

export type ContentMessageTemplateAPI = {
    $root: ContentMessageAPI['$root'] & {
        classList: ClassList;
    };
    $title: ContentMessageAPI['$title'] & {
        classList: ClassList;
    };
    $description: ContentMessageAPI['$description'];
    _icon: ContentMessageAPI['_icon'] & {
        size: ContentSize;
        classList: ClassList;
    };
    alignmentHeight: Accessor<SizeScale>;
    padding: Accessor<LayoutPadding>;
    gap: Accessor<FlexGap>;
    titleVariant: Accessor<DisplayVariant>;
    descriptionVariant: Accessor<TextVariant>;
    hasCloseButton: Accessor<boolean>;
    closeButtonSize: Accessor<CloseButtonProps['size']>;
};
