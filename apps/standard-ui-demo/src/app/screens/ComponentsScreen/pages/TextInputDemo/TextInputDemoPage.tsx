import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { textInputDemoSections } from './_docs';

export const TextInputDemoPage: Component = () => {
    const COMPONENT = findComponent('TextInput');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={textInputDemoSections} />
        </ComponentDemoPage>
    );
};
