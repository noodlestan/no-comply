import { RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'length',
	items: [
		createDocsItemData({ title: 'full', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '99',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} length="full" />;
		}),
		createDocsItemData({ title: 'l', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '3.35',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} length="l" />;
		}),
		createDocsItemData({ title: 'm', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '25',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} length="m" />;
		}),
		createDocsItemData({ title: 's', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '0.12',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} length="s" />;
		}),
		createDocsItemData({ title: 'number (3)', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '50',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} length={3} />;
		}),
		createDocsItemData({ title: 'auto', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '35.15',
			});
			return <RangeInput value={value()} onValueChange={handleValueChange} length="auto" />;
		}),
	],
});
