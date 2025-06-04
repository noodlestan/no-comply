import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { linkDemoSections } from './_docs';

export const LinkDemoPage: Component = () => {
    const COMPONENT = findComponent('Link');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={linkDemoSections} />
        </ComponentDemoPage>
    );
};
