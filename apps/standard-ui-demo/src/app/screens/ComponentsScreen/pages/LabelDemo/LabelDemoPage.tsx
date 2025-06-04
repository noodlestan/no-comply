import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { labelDemoSections } from './_docs';

export const LabelDemoPage: Component = () => {
    const COMPONENT = findComponent('Label');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={labelDemoSections} />
        </ComponentDemoPage>
    );
};
