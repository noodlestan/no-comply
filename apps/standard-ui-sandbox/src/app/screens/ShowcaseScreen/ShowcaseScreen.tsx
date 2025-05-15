import { type ParentComponent } from 'solid-js';

import { ScreenTemplateWithSidebar } from '../../templates';

export const ShowcaseScreen: ParentComponent = props => {
    return <ScreenTemplateWithSidebar>{props.children}</ScreenTemplateWithSidebar>;
};
