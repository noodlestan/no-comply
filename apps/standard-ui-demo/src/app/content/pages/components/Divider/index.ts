import type { ComponentEntityData } from '@no-comply/meta';

import { type DocsComponentPageData, createDocsComponentPageData } from '../../../types';

import basic from './00-basic';
import props from './10-props';
import surface from './20-surface';

export default function (component: ComponentEntityData): DocsComponentPageData {
	return createDocsComponentPageData(component, { items: [basic, props, surface] });
}
