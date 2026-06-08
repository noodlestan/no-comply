import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'length',
	items: [
		createDocsItemData({ title: 'full', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '99',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} length="full" />;
		}),
		createDocsItemData({ title: 'l', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '3.35',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} length="l" />;
		}),
		createDocsItemData({ title: 'm', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '1973',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} length="m" />;
		}),
		createDocsItemData({ title: 's', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '0.12',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} length="s" />;
		}),
		createDocsItemData({ title: 'number (3)', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '101',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} length={3} />;
		}),
		createDocsItemData({ title: 'auto', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '35.15',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} length="auto" />;
		}),
	],
});
