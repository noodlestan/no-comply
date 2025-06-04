import { NavLink } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'href ',
    items: [
        createDemoItem({ title: 'internal', props }, () => (
            <NavLink href="/features/components/NavNavLink">
                <LoremIpsum words={2} />
            </NavLink>
        )),
        createDemoItem({ title: 'external', props }, () => (
            <NavLink href="https://noodlestan.org">
                <LoremIpsum words={2} />
            </NavLink>
        )),
    ],
});
