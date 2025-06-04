import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { rangeInputDemoSections } from './_docs';

export const RangeInputDemoPage: Component = () => {
    const COMPONENT = findComponent('RangeInput');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={rangeInputDemoSections} />
        </ComponentDemoPage>
    );
};
