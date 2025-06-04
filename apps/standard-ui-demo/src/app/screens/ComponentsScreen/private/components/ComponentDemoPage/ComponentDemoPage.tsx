import type { ClassList } from '@no-comply/solid-primitives';
import type { ParentComponent } from 'solid-js';

import type { ComponentMetadata } from '../../../../../../data';
import { ComponentMeta } from '../../../../../content';
import { BasePage } from '../../../../../templates';

type Props = {
    component: ComponentMetadata;
    classList?: ClassList;
};

export const ComponentDemoPage: ParentComponent<Props> = props => {
    return (
        <BasePage
            title={props.component.name}
            undertitle={<ComponentMeta component={props.component} />}
            classList={props.classList}
            data-component-page
        >
            {props.children}
        </BasePage>
    );
};
