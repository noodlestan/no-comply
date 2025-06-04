import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { menuItemActionDemoSections } from './_docs';

export const MenuItemActionDemoPage: Component = () => {
    const COMPONENT = findComponent('MenuItemAction');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={menuItemActionDemoSections} />
        </ComponentDemoPage>
    );
};
