import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { numberInputDemoSections } from './_docs';

export const NumberInputDemoPage: Component = () => {
    const COMPONENT = findComponent('NumberInput');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={numberInputDemoSections} />
        </ComponentDemoPage>
    );
};
