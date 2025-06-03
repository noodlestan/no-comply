import { staticClassList } from '@no-comply/solid-primitives';
import type { Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { RenderDemoSections } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './ButtonDemoPage.module.scss';
import { buttonDemoSections } from './_docs';

export const ButtonDemoPage: Component = () => {
    const COMPONENT = findComponent('Button');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'ButtonDemoPage')}
        >
            <RenderDemoSections sections={buttonDemoSections} />
        </ComponentDemoPage>
    );
};
