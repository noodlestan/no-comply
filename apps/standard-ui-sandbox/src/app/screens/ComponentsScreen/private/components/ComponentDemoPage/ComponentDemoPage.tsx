import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ParentComponent } from 'solid-js';

import type { ComponentMetadata } from '../../../../../../data';
import { ComponentMeta } from '../../../../../components';
import { DemoPage } from '../../../../../templates';

type Props = {
    component: ComponentMetadata;
    classList?: ClassList;
};

export const ComponentDemoPage: ParentComponent<Props> = props => {
    return (
        <DemoPage
            title={props.component.name}
            undertitle={() => <ComponentMeta component={props.component} />}
            classList={props.classList}
        >
            {props.children}
        </DemoPage>
    );
};
