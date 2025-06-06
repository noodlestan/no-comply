import { useParams } from '@solidjs/router';
import { type Component } from 'solid-js';

import { type ComponentMetadata, type ComponentName } from '../../../../../data';
import {
	ComponentMeta,
	type DocsSectionData,
	RenderDocsSections,
	components,
} from '../../../../content';
import { BasePage } from '../../../../templates';

export const ComponentPage: Component = () => {
	const params = useParams();

	// eslint-disable-next-line dot-notation
	const page = () => components[params['component'] as ComponentName];

	return (
		<BasePage
			title={page()?.title}
			undertitle={<ComponentMeta component={page()?.component as ComponentMetadata} />}
			data-component-page
		>
			<RenderDocsSections sections={page()?.items as DocsSectionData[]} />
		</BasePage>
	);
};
