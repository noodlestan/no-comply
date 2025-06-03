import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import { iconDemoSections } from './_docs';

export const IconDemoPage: Component = () => {
    const COMPONENT = findComponent('Icon');

    return (
        <ComponentDemoPage component={COMPONENT}>
            <RenderDemoSections sections={iconDemoSections} />
        </ComponentDemoPage>
    );
};
