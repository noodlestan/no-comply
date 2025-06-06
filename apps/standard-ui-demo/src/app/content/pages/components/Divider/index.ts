import { findComponent } from '../../../../../data';
import { createDocsComponentPageData } from '../../../types';

import basic from './00-basic';
import props from './10-props';
import surface from './20-surface';

const component = findComponent('Divider');

export default createDocsComponentPageData(component, { items: [basic, props, surface] });
