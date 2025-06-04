import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { expandButtonDemoSections } from './_docs';

export const ExpandButtonDemoPage: Component = () => {
    const COMPONENT = findComponent('ExpandButton');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={expandButtonDemoSections} />
        </ComponentDemoPage>
    );
};
