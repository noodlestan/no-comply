import { ExpandButton } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';
import { createExpandButtonDemoController } from '../controllers';

const disabled = createDemoItem({ props }, () => {
    const { labels, id } = createExpandButtonDemoController();
    return <ExpandButton size="small" expanded={true} labels={labels} controls={id} disabled />;
});

export default createDemoSectionData({
    title: 'disabled',
    items: [disabled],
});
