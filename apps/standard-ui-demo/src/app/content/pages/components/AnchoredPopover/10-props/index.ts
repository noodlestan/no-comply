import { type DocsSectionData, createDocsSectionData } from '../../../../types';

import anchor from './10-anchor';
import direction from './12-direction';
import flip from './13-flip';
import placement from './20-placement';
import gap from './21-gap';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'Props',
		items: [anchor(), direction(), flip(), placement(), gap()],
	});
}
