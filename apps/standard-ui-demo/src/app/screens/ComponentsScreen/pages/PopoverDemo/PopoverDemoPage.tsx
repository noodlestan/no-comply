import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { popoverDemoSections } from './_docs';

export const PopoverDemoPage: Component = () => {
    const COMPONENT = findComponent('Popover');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={popoverDemoSections} />
        </ComponentDemoPage>
    );
};
