import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { navLinkDemoSections } from './_docs';

export const NavLinkDemoPage: Component = () => {
    const COMPONENT = findComponent('NavLink');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={navLinkDemoSections} />
        </ComponentDemoPage>
    );
};
