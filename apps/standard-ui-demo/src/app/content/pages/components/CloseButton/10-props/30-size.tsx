import { CloseButton } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

const large = createDocsItemData({ title: 'large', props }, () => (
	<CloseButton label="Close" size="large" />
));

const medium = createDocsItemData({ title: 'medium', props }, () => (
	<CloseButton label="Close" size="medium" />
));

const normal = createDocsItemData(
	{ title: 'normal', props: { ...props, defaultValue: true } },
	() => <CloseButton label="Close" size="normal" />,
);

const small = createDocsItemData({ title: 'small', props }, () => (
	<CloseButton label="Close" size="small" />
));

export default createDocsSectionData({
	title: 'size',
	items: [large, medium, normal, small],
});
