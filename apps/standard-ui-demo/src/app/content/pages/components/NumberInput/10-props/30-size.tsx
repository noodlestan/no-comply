import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'size',
	items: [
		createDocsItemData({ title: 'large', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '99',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="large" />;
		}),
		createDocsItemData({ title: 'medium', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '3.35',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="medium" />;
		}),
		createDocsItemData({ title: 'normal', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '1973',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="normal" />;
		}),
		createDocsItemData({ title: 'small', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '0.12',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="small" />;
		}),
	],
});
