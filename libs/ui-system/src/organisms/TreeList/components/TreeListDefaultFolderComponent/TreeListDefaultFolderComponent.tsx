import { FolderClosedIcon, FolderOpenIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { Display } from '../../../../atoms';
import { Icon } from '../../../../icons';
import { Flex } from '../../../../layouts';
import type { TreeFolder, TreeNodeComponentProps } from '../../types';

import './TreeListDefaultFolderComponent.css';

export const TreeListDefaultFolderComponent: Component<TreeNodeComponentProps> = props => {
    const icon = () => (props.isExpanded ? FolderOpenIcon : FolderClosedIcon);
    const label = () => (props.node.object as TreeFolder).name;

    return (
        <Flex direction="row" gap="s" align="center">
            <Icon icon={icon()} size="xs" />
            <Display level={6} tag="span">
                {label()}
            </Display>
        </Flex>
    );
};
