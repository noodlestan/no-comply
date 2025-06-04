import { ExpandButton } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';
import { createExpandButtonDemoController } from '../controllers';

const disabled = createDemoItem({ title: '', props }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonDemoController();
    return (
        <ExpandButton
            size="small"
            expanded={expanded()}
            labels={labels}
            controls={id}
            onPress={toggleExpanded}
        />
    );
});

export default createDemoSectionData({
    title: 'disabled',
    items: [disabled],
});
