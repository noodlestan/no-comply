import { createDemoSectionData } from '../../../../../../content';

import value from './10-value';
import size from './30-size';
import disabled from './40-disabled';
import invalid from './42-invalid';
import modified from './43-modified';
import onChange from './50-on-change';
import onValueChange from './51-on-value-change';

export default createDemoSectionData({
    title: 'Props',
    items: [value, size, disabled, invalid, modified, onChange, onValueChange],
});
