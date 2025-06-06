import { NavLink } from '@no-comply/standard-ui';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'current',
    items: [
        createDocsItemData({ title: 'true', props }, () => (
            <NavLink href="https://noodlestan.org" current>
                Link
            </NavLink>
        )),
        createDocsItemData({ title: 'false', props }, () => (
            <NavLink href="/features/components/NavLink" current={false}>
                NavLink
            </NavLink>
        )),
        createDocsItemData({ title: 'current and disabled', props }, () => (
            <NavLink href="https://noodlestan.org" current disabled>
                Link
            </NavLink>
        )),
    ],
});
