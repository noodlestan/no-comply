import { Link } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'href ',
    items: [
        createDemoItem({ title: 'internal', props }, () => (
            <Link href="/features/components/NavLink">NavLink component</Link>
        )),
        createDemoItem({ title: 'external', props }, () => (
            <Link href="https://noodlestan.org">Noodlestan Collective</Link>
        )),
    ],
});
