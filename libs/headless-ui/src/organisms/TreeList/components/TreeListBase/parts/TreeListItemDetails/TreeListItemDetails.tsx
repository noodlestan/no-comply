import { staticClassList } from '@noodlestan/context-ui-types';
import { type Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { FocusableBase } from '../../../../../../focus';
import { FlexBase } from '../../../../../../layout';
import type { TreeNode } from '../../../../types';

import styles from './TreeListItemDetails.module.css';
import { createTreeListItemDetails } from './createTreeListItemDetails';

export type TreeListItemDetailsProps = {
    node: TreeNode;
    expand: number | boolean | undefined;
    level: number;
    parent: TreeNode | undefined;
    isParentSelected: boolean;
};

export const TreeListItemDetails: Component<TreeListItemDetailsProps> = props => {
    const { hasToggle, containerProps, focusableProps, expandButtonProps, componentProps } =
        createTreeListItemDetails(props);

    const toggleClassList = staticClassList(styles, 'TreeListItemDetails--toggle');
    const contentsClassList = staticClassList(styles, 'TreeListItemDetails--contents');

    return (
        <FlexBase direction="row" align="center" {...containerProps}>
            <FocusableBase {...focusableProps}>
                <FlexBase direction="row" align="center">
                    <Show when={hasToggle()}>
                        <div classList={toggleClassList}>
                            <Dynamic {...expandButtonProps} />
                        </div>
                    </Show>
                    <FlexBase stretch="width" classList={contentsClassList}>
                        <Dynamic {...componentProps} />
                    </FlexBase>
                </FlexBase>
            </FocusableBase>
        </FlexBase>
    );
};
