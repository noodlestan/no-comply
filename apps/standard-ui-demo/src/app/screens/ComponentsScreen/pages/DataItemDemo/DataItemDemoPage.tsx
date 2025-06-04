import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { dataItemDemoSections } from './_docs';

export const DataItemDemoPage: Component = () => {
    const COMPONENT = findComponent('DataItem');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={dataItemDemoSections} />
        </ComponentDemoPage>
    );
};
