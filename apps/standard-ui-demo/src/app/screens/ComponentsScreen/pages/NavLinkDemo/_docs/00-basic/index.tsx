import { NavLink } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'Basic usage',
    items: [
        createDemoItem({ props }, () => (
            <>
                <NavLink href="/features/components/NavLink">NavLink</NavLink>
                <NavLink href="/features/components/Button">Button</NavLink>
                <NavLink href="/features/components/IconButton">IconButton</NavLink>
            </>
        )),
    ],
});
