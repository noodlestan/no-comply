import { createDemoSectionData } from '../../../../../../content';

import variant from './10-variant';
import intent from './20-intent';
import size from './30-size';
import round from './40-round';
import disabled from './50-disabled';
import onPpress from './60-on-press';

export default createDemoSectionData({
    title: 'Props',
    items: [variant, intent, size, round, disabled, onPpress],
});
