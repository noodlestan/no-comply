import { createDemoSection } from '../../../../../../components';

import variant from './00-variant';
import intent from './10-intent';
import size from './20-size';
import disabled from './30-disabled';
import onPpress from './40-on-press';

export default createDemoSection({
    title: 'Props',
    items: [variant, intent, size, disabled, onPpress],
});
