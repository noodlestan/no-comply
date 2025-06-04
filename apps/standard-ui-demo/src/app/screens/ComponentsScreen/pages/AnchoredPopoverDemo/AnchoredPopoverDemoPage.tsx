import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { anchoredPopoverDemoSections } from './_docs';

export const AnchoredPopoverDemoPage: Component = () => {
    const COMPONENT = findComponent('AnchoredPopover');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={anchoredPopoverDemoSections} />
        </ComponentDemoPage>
    );
};
