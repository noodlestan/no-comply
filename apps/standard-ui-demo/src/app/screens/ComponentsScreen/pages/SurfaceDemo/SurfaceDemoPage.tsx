import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { surfaceDemoSections } from './_docs';

export const SurfaceDemoPage: Component = () => {
    const COMPONENT = findComponent('Surface');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={surfaceDemoSections} />
        </ComponentDemoPage>
    );
};
