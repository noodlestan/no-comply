import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Callout } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { DemoGroup, DemoItem } from '../../../../components';
import { ComponentDemoPage } from '../../private';

import styles from './CalloutDemoPage.module.scss';

export const CalloutDemoPage: Component = () => {
    const COMPONENT = findComponent('Callout');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'CalloutDemoPage')}
        >
            <DemoGroup title="defaults">
                <DemoItem>
                    <Callout title="Lorem ipsum">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat
                        pellentesque dolor nec pellentesque. Aliquam erat volutpat. Nullam aliquet
                        velit non leo tincidunt convallis. Etiam bibendum mi ut enim accumsan, non
                        dapibus tortor accumsan. Maecenas scelerisque, nunc at vestibulum
                        pellentesque, mauris ex bibendum velit, vitae convallis nisl sem ut libero.
                    </Callout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="variant">
                <DemoItem title="passive">
                    <Callout title="Lorem ipsum" variant="passive">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
                <DemoItem title="info">
                    <Callout title="Lorem ipsum" variant="info">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
                <DemoItem title="warning">
                    <Callout title="Lorem ipsum" variant="warning">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
                <DemoItem title="danger">
                    <Callout title="Lorem ipsum" variant="danger">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
                <DemoItem title="success">
                    <Callout title="Lorem ipsum" variant="success">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="size">
                <DemoItem title="normal">
                    <Callout title="Lorem ipsum" size="normal">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
                <DemoItem title="small">
                    <Callout title="Lorem ipsum" size="small">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="length">
                <DemoItem title="full">
                    <Callout title="Lorem ipsum" length="full">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
                <DemoItem title="compact">
                    <Callout title="Lorem ipsum" length="compact">
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
            </DemoGroup>

            <DemoGroup title="classList">
                <DemoItem note="Should override border color and background color">
                    <Callout title="Lorem ipsum" classList={staticClassList(styles, 'override')}>
                        Lorem ipsum dolor sit amet.
                    </Callout>
                </DemoItem>
            </DemoGroup>
        </ComponentDemoPage>
    );
};
