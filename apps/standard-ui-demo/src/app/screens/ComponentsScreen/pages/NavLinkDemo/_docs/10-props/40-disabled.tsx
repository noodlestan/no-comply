import { NavLink } from '@no-comply/standard-ui';

import { LoremIpsum, createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'disabled',
    items: [
        createDemoItem({ props }, () => (
            <NavLink href="https://noodlestan.org" disabled>
                <LoremIpsum words={2} />
            </NavLink>
        )),
    ],
});
