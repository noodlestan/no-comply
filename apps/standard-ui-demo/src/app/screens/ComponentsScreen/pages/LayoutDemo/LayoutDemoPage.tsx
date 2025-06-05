import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { layoutDemoSections } from './_docs';

export const LayoutDemoPage: Component = () => {
    const COMPONENT = findComponent('Layout');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={layoutDemoSections} />
        </ComponentDemoPage>
    );
};
