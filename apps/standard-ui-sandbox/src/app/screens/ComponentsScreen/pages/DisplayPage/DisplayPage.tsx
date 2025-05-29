import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Display } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem } from '../../../../components';
import { DemoPage } from '../../../../templates';

import styles from './DisplayPage.module.css';

export const DisplayPage: Component = () => {
    const COMPONENT = findComponent('Display');

    return (
        <DemoPage title="Display" classList={staticClassList(styles, 'DisplayPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem>
                    <Display>Vitae elementum ipsum</Display>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="level">
                <DemoItem title="1">
                    <Display level={1}>Vitae elementum ipsum</Display>
                </DemoItem>
                <DemoItem title="2">
                    <Display level={2}>Tempor quis pellent faucibus</Display>
                </DemoItem>
                <DemoItem title="3">
                    <Display level={3}>Ipsum eu euismod accumsan</Display>
                </DemoItem>
                <DemoItem title="4">
                    <Display level={4}>Sapien consectetur purus ut</Display>
                </DemoItem>
                <DemoItem title="5">
                    <Display level={5}>Sapien consectetur purus ut</Display>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem title="hero">
                    <Display variant="hero">Vestibulum ultricies molestie tellus</Display>
                </DemoItem>
                <DemoItem title="xl">
                    <Display variant="xl">Vestibulum ultricies molestie tellus</Display>
                </DemoItem>
                <DemoItem title="l">
                    <Display variant="l">Bibendum nisi erat dignissim leo</Display>
                </DemoItem>
                <DemoItem title="m">
                    <Display variant="m">turpis quis nulla dapibus vulputate in a justo</Display>
                </DemoItem>
                <DemoItem title="s">
                    <Display variant="s">Sed congue cursus diam at cursus</Display>
                </DemoItem>
                <DemoItem title="xs">
                    <Display variant="xs">Sed congue cursus diam at cursus</Display>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="level + variant">
                <DemoItem title="applies size">
                    <Display level={1} variant="s">
                        Nam scelerisque, lectus sed pulvinar aliquet
                    </Display>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="nowrap">
                <DemoItem title="true" width="var(--scale-3xl)">
                    <Display level={1} variant="l" nowrap>
                        Nam scelerisque, lectus sed pulvinar aliquet turpis quis nulla dapibus
                        vulputate in a justo duis fermentum faucibus est non semper nisl
                    </Display>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="tag">
                <DemoItem note="Should render a <h1>">
                    <Display level={3} tag="h1">
                        Duis fermentum faucibus est non semper nisl
                    </Display>
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="classList">
                <DemoItem note="Should override text color">
                    <Display classList={staticClassList(styles, 'override')}>Lorem ipsum</Display>
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
