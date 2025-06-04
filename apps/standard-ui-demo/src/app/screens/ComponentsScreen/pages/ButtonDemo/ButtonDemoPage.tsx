import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { buttonDemoSections } from './_docs';

export const ButtonDemoPage: Component = () => {
    const COMPONENT = findComponent('Button');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={buttonDemoSections} />
        </ComponentDemoPage>
    );
};
