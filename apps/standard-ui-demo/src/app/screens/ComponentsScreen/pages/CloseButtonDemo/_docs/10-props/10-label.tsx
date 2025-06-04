import { CloseButton } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

const disabled = createDemoItem({ props }, () => <CloseButton label="Close Dialog" />);

export default createDemoSectionData({
    title: 'label',
    items: [disabled],
});
