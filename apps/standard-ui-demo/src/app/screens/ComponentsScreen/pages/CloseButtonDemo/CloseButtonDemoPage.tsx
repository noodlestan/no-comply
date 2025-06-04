import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../content';
import { ComponentDemoPage } from '../../private';

import { closeButtonDemoSections } from './_docs';

export const CloseButtonDemoPage: Component = () => {
    const COMPONENT = findComponent('CloseButton');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={closeButtonDemoSections} />
        </ComponentDemoPage>
    );
};
