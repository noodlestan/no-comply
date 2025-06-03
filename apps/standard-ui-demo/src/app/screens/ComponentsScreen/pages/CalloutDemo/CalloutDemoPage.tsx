import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import { calloutDemoSections } from './_docs';

export const CalloutDemoPage: Component = () => {
    const COMPONENT = findComponent('Callout');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={calloutDemoSections} />
        </ComponentDemoPage>
    );
};
