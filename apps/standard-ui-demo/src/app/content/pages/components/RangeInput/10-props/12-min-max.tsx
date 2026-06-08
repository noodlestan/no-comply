import { Label, RangeInput } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createRangeInputExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'min and max',
	items: [
		createDocsItemData({ title: 'max (10)', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '9.99',
			});
			return (
				<>
					<RangeInput value={value()} onValueChange={handleValueChange} max={10} />
					<Label>Current value: {value()}</Label>
				</>
			);
		}),
		createDocsItemData({ title: 'min (3)', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '9',
			});
			return (
				<>
					<RangeInput value={value()} onValueChange={handleValueChange} min={3} />
					<Label>Current value: {value()}</Label>
				</>
			);
		}),
		createDocsItemData({ title: 'min (0) and max(5)', props }, () => {
			const { value, handleValueChange } = createRangeInputExampleController({
				value: '1',
			});
			return (
				<>
					<RangeInput value={value()} onValueChange={handleValueChange} min={0} max={5} />
					<Label>Current value: {value()}</Label>
				</>
			);
		}),
	],
});
