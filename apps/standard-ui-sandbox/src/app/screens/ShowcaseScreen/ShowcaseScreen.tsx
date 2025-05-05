import { type ParentComponent } from 'solid-js';

import { ScreenWithSidebar } from '../../templates';

export const ShowcaseScreen: ParentComponent = props => {
    return <ScreenWithSidebar>{props.children}</ScreenWithSidebar>;
};
