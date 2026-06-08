import { type DocsSectionData, createDocsSectionData } from '../../../../types';

import variant from './10-variant';
import intent from './20-intent';
import size from './30-size';
import disabled from './40-disabled';
import onPress from './50-on-press';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'Props',
		items: [variant(), intent(), size(), disabled(), onPress()],
	});
}
