import { ExpandButton, Label } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';
import { createExpandButtonDemoController } from '../controllers';

const disabled = createDemoItem({ title: '', props }, () => {
    const { expanded, expandedText, id, toggleExpanded } = createExpandButtonDemoController();

    const labels = {
        expanded: 'Close section',
        collapsed: 'Show section',
    };

    return (
        <>
            <ExpandButton
                expanded={expanded()}
                labels={labels}
                controls={id}
                onPress={toggleExpanded}
            />
            <Label id={id}>{expandedText()}</Label>
        </>
    );
});

export default createDemoSectionData({
    title: 'labels',
    items: [disabled],
});
