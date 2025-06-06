import { Select } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';
import { createSelectExampleController } from '../controllers';

export default createDocsSectionData({
	title: 'length',
	items: [
		createDocsItemData({ title: 'full', props }, () => {
			const { value, handleValueChange } = createSelectExampleController();
			return (
				<Select length="full" value={value()} onValueChange={handleValueChange} placeholder="-">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
		createDocsItemData({ title: 'l', props }, () => {
			const { value, handleValueChange } = createSelectExampleController();
			return (
				<Select length="l" value={value()} onValueChange={handleValueChange} placeholder="-">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
		createDocsItemData({ title: 'm', props }, () => {
			const { value, handleValueChange } = createSelectExampleController();
			return (
				<Select length="m" value={value()} onValueChange={handleValueChange} placeholder="-">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
		createDocsItemData({ title: 's', props }, () => {
			const { value, handleValueChange } = createSelectExampleController();
			return (
				<Select length="s" value={value()} onValueChange={handleValueChange} placeholder="-">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
		createDocsItemData({ title: 'number (3)', props }, () => {
			const { value, handleValueChange } = createSelectExampleController();
			return (
				<Select length={3} value={value()} onValueChange={handleValueChange} placeholder="-">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
		createDocsItemData({ title: 'auto', props }, () => {
			const { value, handleValueChange } = createSelectExampleController();
			return (
				<Select length="auto" value={value()} onValueChange={handleValueChange} placeholder="-">
					<option value="apple">Apples</option>
					<option value="orange">Oranges</option>
					<option value="banana">Bananas</option>
				</Select>
			);
		}),
	],
});
