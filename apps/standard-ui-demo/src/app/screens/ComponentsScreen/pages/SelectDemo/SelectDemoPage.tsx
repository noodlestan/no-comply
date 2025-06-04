import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { selectDemoSections } from './_docs';

export const SelectDemoPage: Component = () => {
    const COMPONENT = findComponent('Select');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={selectDemoSections} />
        </ComponentDemoPage>
    );
};
