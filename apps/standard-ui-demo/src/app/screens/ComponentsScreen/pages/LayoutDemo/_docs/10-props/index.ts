import { createDemoSectionData } from '../../../../../../content';

import padding from './10-padding';
import paddingShorthand from './11-padding-shorthand';
import paddingLonghands from './12-padding-longhands';
import stretch from './20-stretch';
import overflow from './30-overflow';
import uncontained from './40-uncontained';
import tag from './90-tag';

export default createDemoSectionData({
    title: 'Props',
    items: [padding, paddingShorthand, paddingLonghands, stretch, overflow, uncontained, tag],
});
