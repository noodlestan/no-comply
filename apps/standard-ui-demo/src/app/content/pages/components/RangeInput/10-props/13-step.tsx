import { Label, RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'step',
	items: [
		createDocsItemData({ title: '0.1', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '9.99',
			});
			return (
				<>
					<RangeInput value={value()} onValueChange={handleValueChange} step={0.1} />;
					<Label>Current value: {value()}</Label>
				</>
			);
		}),
		createDocsItemData({ title: '1', props: { ...props, defaultValue: true } }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '55',
			});
			return (
				<>
					<RangeInput value={value()} onValueChange={handleValueChange} step={1} />;
					<Label>Current value: {value()}</Label>
				</>
			);
		}),
		createDocsItemData({ title: '50', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '1250',
			});
			return (
				<>
					<RangeInput
						value={value()}
						onValueChange={handleValueChange}
						step={50}
						min={500}
						max={1500}
					/>
					;<Label>Current value: {value()}</Label>
				</>
			);
		}),
	],
});
