import { RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'size',
	items: [
		createDocsItemData({ title: 'l', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '99',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} size="l" />;
		}),
		createDocsItemData({ title: 'm', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '3.35',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} size="m" />;
		}),
		createDocsItemData({ title: 's', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '25',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} size="s" />;
		}),
		createDocsItemData({ title: 'xs', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '0.12',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} size="xs" />;
		}),
	],
});
