import { ExpandButton } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props } from '../constants';
import { createExpandButtonDemoController } from '../controllers';

const large = createDemoItem({ title: 'large', props }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonDemoController();
    return (
        <ExpandButton
            size="large"
            expanded={expanded()}
            labels={labels}
            controls={id}
            onPress={toggleExpanded}
        />
    );
});

const medium = createDemoItem({ title: 'medium', props }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonDemoController();
    return (
        <ExpandButton
            size="medium"
            expanded={expanded()}
            labels={labels}
            controls={id}
            onPress={toggleExpanded}
        />
    );
});

const normal = createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonDemoController();
    return (
        <ExpandButton
            size="normal"
            expanded={expanded()}
            labels={labels}
            controls={id}
            onPress={toggleExpanded}
        />
    );
});

const small = createDemoItem({ title: 'small', props }, () => {
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
    title: 'size',
    items: [large, medium, normal, small],
});
