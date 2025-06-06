import { findComponent } from '../../../../../data';
import { createDocsComponentPageData } from '../../../types';

import basic from './00-basic';
import props from './10-props';

const component = findComponent('Display');

export default createDocsComponentPageData(component, { items: [basic, props] });
