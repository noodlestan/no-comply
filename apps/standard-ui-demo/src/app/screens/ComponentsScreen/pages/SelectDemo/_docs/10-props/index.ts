import { createDemoSectionData } from '../../../../../../content';

import value from './10-value';
import placeholder from './20-placeholder';
import size from './30-size';
import length from './31-length';
import disabled from './40-disabled';
import invalid from './42-invalid';
import modified from './43-modified';

export default createDemoSectionData({
    title: 'Props',
    items: [value, placeholder, size, length, disabled, invalid, modified],
});
