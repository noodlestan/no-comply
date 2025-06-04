import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { textDemoSections } from './_docs';

export const TextDemoPage: Component = () => {
    const COMPONENT = findComponent('Text');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={textDemoSections} />
        </ComponentDemoPage>
    );
};
