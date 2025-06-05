import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { flexDemoSections } from './_docs';

export const FlexDemoPage: Component = () => {
    const COMPONENT = findComponent('Flex');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={flexDemoSections} />
        </ComponentDemoPage>
    );
};
