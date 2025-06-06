import { createDocsSectionData } from '../../../../types';

import variant from './10-variant';
import intent from './20-intent';
import icon from './30-icon';
import description from './35-description';
import disabled from './40-disabled';
import onPress from './50-on-press';

export default createDocsSectionData({
    title: 'Props',
    items: [variant, intent, icon, description, disabled, onPress],
});
