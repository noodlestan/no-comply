import { createDemoSectionData } from '../../../../../../content';

import value from './10-value';
import minAndMax from './12-min-max';
import step from './13-step';
import size from './30-size';
import length from './31-length';
import disabled from './40-disabled';
import invalid from './42-invalid';
import modified from './43-modified';

export default createDemoSectionData({
    title: 'Props',
    items: [value, minAndMax, step, size, length, disabled, invalid, modified],
});
