import { ExpandButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

const large = createDocsItemData({ title: 'large', props }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonExampleController();
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

const medium = createDocsItemData({ title: 'medium', props }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonExampleController();
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

const normal = createDocsItemData(
    { title: 'normal', props: { ...props, defaultValue: true } },
    () => {
        const { expanded, labels, id, toggleExpanded } = createExpandButtonExampleController();
        return (
            <ExpandButton
                size="normal"
                expanded={expanded()}
                labels={labels}
                controls={id}
                onPress={toggleExpanded}
            />
        );
    },
);

const small = createDocsItemData({ title: 'small', props }, () => {
    const { expanded, labels, id, toggleExpanded } = createExpandButtonExampleController();
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

export default createDocsSectionData({
    title: 'size',
    items: [large, medium, normal, small],
});
