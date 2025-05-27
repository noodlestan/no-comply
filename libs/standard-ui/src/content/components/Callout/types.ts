import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { StaticMessageAPI, StaticMessageProps } from '@noodlestan/headless-ui';
import type { Accessor } from 'solid-js';

import type { CloseButtonProps } from '../../../actions';
import type { FlexGap, LayoutPadding } from '../../../layout';
import type { ContentSize, SizeScale } from '../../../types';
import type { DisplayMixinVariant, TextVariant } from '../../../typography';

export type CalloutProps = Omit<StaticMessageProps, keyof AriaLabelledProps> & {
    size?: CalloutSize;
    length?: CalloutLength;
};

export type CalloutSize = 'small' | 'normal';
export type CalloutLength = 'compact' | 'full';

export type CalloutAPI = {
    $root: StaticMessageAPI['$root'] & {
        classList: ClassList;
    };
    $title: StaticMessageAPI['$title'] & {
        classList: ClassList;
    };
    $description: StaticMessageAPI['$description'];
    iconProps: StaticMessageAPI['iconProps'] & {
        size: ContentSize;
        classList: ClassList;
    };
    alignmentHeight: Accessor<SizeScale>;
    padding: Accessor<LayoutPadding>;
    gap: Accessor<FlexGap>;
    titleVariant: Accessor<DisplayMixinVariant>;
    descriptionVariant: Accessor<TextVariant>;
    closeButtonSize: Accessor<CloseButtonProps['size']>;
};
