import { NavLink } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'href ',
    items: [
        createDocsItemData({ title: 'internal', props }, () => (
            <NavLink href="/features/components/NavNavLink">
                <LoremIpsum words={2} />
            </NavLink>
        )),
        createDocsItemData({ title: 'external', props }, () => (
            <NavLink href="https://noodlestan.org">
                <LoremIpsum words={2} />
            </NavLink>
        )),
    ],
});
