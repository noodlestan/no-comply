import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { dividerDemoSections } from './_docs';

export const DividerDemoPage: Component = () => {
    const COMPONENT = findComponent('Divider');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={dividerDemoSections} />
        </ComponentDemoPage>
    );
};
