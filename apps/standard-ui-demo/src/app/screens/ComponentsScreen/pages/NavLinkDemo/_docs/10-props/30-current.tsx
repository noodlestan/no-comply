import { NavLink } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'current',
    items: [
        createDemoItem({ title: 'true', props }, () => (
            <NavLink href="https://noodlestan.org" current>
                Link
            </NavLink>
        )),
        createDemoItem({ title: 'false', props }, () => (
            <NavLink href="/features/components/NavLink" current={false}>
                NavLink
            </NavLink>
        )),
        createDemoItem({ title: 'current and disabled', props }, () => (
            <NavLink href="https://noodlestan.org" current disabled>
                Link
            </NavLink>
        )),
    ],
});
