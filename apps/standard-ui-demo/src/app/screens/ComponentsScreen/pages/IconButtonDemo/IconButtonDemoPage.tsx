import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { iconButtonDemoSections } from './_docs';

export const IconButtonDemoPage: Component = () => {
    const COMPONENT = findComponent('IconButton');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={iconButtonDemoSections} />
        </ComponentDemoPage>
    );
};
