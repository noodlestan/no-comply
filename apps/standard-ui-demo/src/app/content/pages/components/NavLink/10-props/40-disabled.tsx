import { NavLink } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'disabled',
    items: [
        createDocsItemData({ props }, () => (
            <NavLink href="https://noodlestan.org" disabled>
                <LoremIpsum words={2} />
            </NavLink>
        )),
    ],
});
