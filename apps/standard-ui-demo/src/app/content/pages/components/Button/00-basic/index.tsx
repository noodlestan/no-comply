import { Button, Icon } from '@no-comply/standard-ui';
import UnlockIcon from 'lucide-solid/icons/unlock';

import { type DocsSectionData, createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default function (): DocsSectionData {
	return createDocsSectionData({
		title: 'Basic usage',
		items: [
			createDocsItemData({ title: 'With a text label', props }, () => (
				<Button>View more items</Button>
			)),
			createDocsItemData({ title: 'With icon and label', props }, () => (
				<Button>
					<Icon icon={UnlockIcon} size="small" />
					Sign out
				</Button>
			)),
		],
	});
}
