import { type ParentComponent } from 'solid-js';

import { SidebarNav } from '../../navigation';
import { ScreenTemplateWithSidebar } from '../../templates';

import { COMPONENTS_SIDEBAR_ITEMS } from './constants';

export const ComponentsScreen: ParentComponent = props => {
    return (
        <ScreenTemplateWithSidebar sidebar={<SidebarNav items={COMPONENTS_SIDEBAR_ITEMS} />}>
            {props.children}
        </ScreenTemplateWithSidebar>
    );
};
