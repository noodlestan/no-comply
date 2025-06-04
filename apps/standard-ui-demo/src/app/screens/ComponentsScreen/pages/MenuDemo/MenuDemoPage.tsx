import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { menuDemoSections } from './_docs';

export const MenuDemoPage: Component = () => {
    const COMPONENT = findComponent('Menu');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={menuDemoSections} />
        </ComponentDemoPage>
    );
};
