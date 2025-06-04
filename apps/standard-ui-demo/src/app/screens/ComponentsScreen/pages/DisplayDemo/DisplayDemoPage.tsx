import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { displayDemoSections } from './_docs';

export const DisplayDemoPage: Component = () => {
    const COMPONENT = findComponent('Display');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={displayDemoSections} />
        </ComponentDemoPage>
    );
};
