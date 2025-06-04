import { ExpandButton, Label } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';
import { createExpandButtonDemoController } from '../controllers';

const controls = createDemoItem({ title: '', props }, () => {
    const { expanded, expandedText, labels, id, toggleExpanded } =
        createExpandButtonDemoController();
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
    title: 'controls',
    items: [controls],
});
