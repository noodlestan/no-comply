import { Surface } from '@no-comply/standard-ui';

import { ExampleLarge, ExampleMedium, ExampleTiny } from '../../../../examples';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { SurfaceVariantExample } from '../examples';

const items = [
	createDocsItemData({ title: 'page (on stage)', props }, () => (
		<SurfaceVariantExample onVariant="stage">
			<Surface variant="page">
				<ExampleLarge title="Page" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'panel (on stage)', props: { ...props, defaultValue: true } }, () => (
		<SurfaceVariantExample onVariant="stage">
			<Surface variant="panel">
				<ExampleTiny title="Panel" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'panel (on page)', props }, () => (
		<SurfaceVariantExample onVariant="page">
			<Surface variant="panel">
				<ExampleTiny title="Panel" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'card (on stage)', props }, () => (
		<SurfaceVariantExample onVariant="stage">
			<Surface variant="card">
				<ExampleMedium title="Card" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'card (on page)', props }, () => (
		<SurfaceVariantExample onVariant="page">
			<Surface variant="card">
				<ExampleMedium title="Card" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'message (on page)', props }, () => (
		<SurfaceVariantExample onVariant="page" data-message="info">
			<Surface variant="message">
				<ExampleMedium title="Message" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'inverse (on stage)', props }, () => (
		<SurfaceVariantExample onVariant="stage">
			<Surface variant="inverse">
				<ExampleMedium title="Inverse" />
			</Surface>
		</SurfaceVariantExample>
	)),
	createDocsItemData({ title: 'inverse (on page)', props }, () => (
		<SurfaceVariantExample onVariant="page">
			<Surface variant="inverse">
				<ExampleMedium title="Inverse" />
			</Surface>
		</SurfaceVariantExample>
	)),
];

export default createDocsSectionData({
	title: 'variant',
	items,
});
