import { createIconValue } from '@no-comply/solid-contexts';
import { ExpandButton, Label } from '@no-comply/standard-ui';
import { FolderClosed, FolderOpen } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createExpandButtonDemoController } from '../controllers';

const icons = createDemoItem({ title: '', props }, () => {
    const { expanded, expandedText, labels, id, toggleExpanded } =
        createExpandButtonDemoController();

    const icons = {
        expanded: createIconValue(FolderOpen),
        collapsed: createIconValue(FolderClosed),
    };

    return (
        <>
            <ExpandButton
                expanded={expanded()}
                labels={labels}
                icons={icons}
                controls={id}
                onPress={toggleExpanded}
            />
            <Label id={id}>{expandedText()}</Label>
        </>
    );
});

export default createDemoSectionData({
    title: 'icons',
    items: [icons],
});
