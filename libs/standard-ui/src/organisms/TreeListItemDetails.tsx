import {
    FocusableBase,
    type TreeNode,
    createTreeListItemDetails,
} from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { type Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Flex } from '../layout';

import styles from './TreeListItemDetails.module.scss';

export type TreeListItemDetailsProps = {
    node: TreeNode;
    expand: number | boolean | undefined;
    level: number;
    parent: TreeNode | undefined;
    parentSelected: boolean;
};

export const TreeListItemDetails: Component<TreeListItemDetailsProps> = props => {
    const { hasToggle, $root, focusableProps, expandButtonProps, itemContentsProps } =
        createTreeListItemDetails(props);

    const toggleClassList = staticClassList(styles, 'TreeListItemDetails--toggle');
    const contentsClassList = staticClassList(styles, 'TreeListItemDetails--contents');

    return (
        <Flex direction="row" align="center" {...$root}>
            <FocusableBase {...focusableProps}>
                {() => (
                    <Flex direction="row" align="center" {...$root}>
                        <Show when={hasToggle()}>
                            <div classList={toggleClassList}>
                                <Dynamic {...expandButtonProps} />
                            </div>
                        </Show>
                        <Flex stretch="width" classList={contentsClassList}>
                            <Dynamic {...itemContentsProps} />
                        </Flex>
                    </Flex>
                )}
            </FocusableBase>
        </Flex>
    );
};
