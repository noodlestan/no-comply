import type { Component } from 'solid-js';

import { DocsItem, DocsSection } from '../../../../content';
import { BasePage } from '../../../../templates';

export const ComponentsIndexPage: Component = () => {
	return (
		<BasePage title="Components">
			<DocsSection title="Search">
				<DocsItem row>YAYA!</DocsItem>
			</DocsSection>
			<DocsSection title="All Components">
				<DocsItem row>YAYA!</DocsItem>
			</DocsSection>
		</BasePage>
	);
};
