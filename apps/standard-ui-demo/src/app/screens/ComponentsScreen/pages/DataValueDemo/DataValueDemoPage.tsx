import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { dataValueDemoSections } from './_docs';

export const DataValueDemoPage: Component = () => {
    const COMPONENT = findComponent('DataValue');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={dataValueDemoSections} />
        </ComponentDemoPage>
    );
};
