import { NumberInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createNumberInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'size',
	items: [
		createDocsItemData({ title: 'l', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '99',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="l" />;
		}),
		createDocsItemData({ title: 'm', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '3.35',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="m" />;
		}),
		createDocsItemData({ title: 's', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '1973',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="s" />;
		}),
		createDocsItemData({ title: 'xs', props }, () => {
			const { value, handleValueChange } = createNumberInputExampleController({
				value: '0.12',
			});
			return <NumberInput value={value()} onValueChange={handleValueChange} size="xs" />;
		}),
	],
});
