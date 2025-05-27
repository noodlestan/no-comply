import { type ParentComponent } from 'solid-js';

import { ScreenTemplateBase } from '../../templates';

export const WelcomeScreen: ParentComponent = props => {
    return <ScreenTemplateBase>{props.children}</ScreenTemplateBase>;
};
