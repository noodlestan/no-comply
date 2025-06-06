import { ExpandButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createExpandButtonExampleController } from '../controllers';

const disabled = createDocsItemData({ props }, () => {
    const { labels, id } = createExpandButtonExampleController();
    return <ExpandButton size="small" expanded={true} labels={labels} controls={id} disabled />;
});

export default createDocsSectionData({
    title: 'disabled',
    items: [disabled],
});
