import { Link } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'disabled',
    items: [
        createDemoItem({ props }, () => (
            <Link href="https://noodlestan.org" disabled>
                Noodlestan Collective
            </Link>
        )),
    ],
});
