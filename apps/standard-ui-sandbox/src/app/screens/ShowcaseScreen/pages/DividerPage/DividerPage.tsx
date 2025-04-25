import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Divider } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentMeta, DemoGroup, DemoItem, DemoPage } from '../../../../components';

import styles from './DividerPage.module.css';

export const DividerPage: Component = () => {
    const COMPONENT = findComponent('Divider');

    return (
        <DemoPage title="Divider" classList={staticClassList(styles, 'DividerPage')}>
            <ComponentMeta component={COMPONENT} />
            <DemoGroup title="defaults">
                <DemoItem row title="stage" surface="stage">
                    <Divider />
                    <Divider variant="alt" />
                    <Divider variant="strong" />
                    <Divider variant="muted" />
                </DemoItem>
                <DemoItem row title="page" surface="page">
                    <Divider />
                    <Divider variant="alt" />
                    <Divider variant="strong" />
                    <Divider variant="muted" />
                </DemoItem>
                <DemoItem row title="card" surface="card">
                    <Divider />
                    <Divider variant="alt" />
                    <Divider variant="strong" />
                    <Divider variant="muted" />
                </DemoItem>
                <DemoItem row title="message" surface="message">
                    <Divider />
                    <Divider variant="alt" />
                    <Divider variant="strong" />
                    <Divider variant="muted" />
                </DemoItem>
                <DemoItem row title="inverse" surface="inverse">
                    <Divider />
                    <Divider variant="alt" />
                    <Divider variant="strong" />
                    <Divider variant="muted" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="variant">
                <DemoItem title="base">
                    <Divider variant="base" />
                </DemoItem>
                <DemoItem title="alt">
                    <Divider variant="alt" />
                </DemoItem>
                <DemoItem title="strong">
                    <Divider variant="strong" />
                </DemoItem>
                <DemoItem title="muted">
                    <Divider variant="muted" />
                </DemoItem>
            </DemoGroup>
            <DemoGroup title="length">
                <DemoItem title="full">
                    <Divider length={'full'} />
                </DemoItem>
                <DemoItem title="l">
                    <Divider length={'l'} />
                </DemoItem>
                <DemoItem title="m">
                    <Divider length={'m'} />
                </DemoItem>
                <DemoItem title="s">
                    <Divider length={'s'} />
                </DemoItem>
                <DemoItem title="number">
                    <Divider length={33} />
                </DemoItem>
            </DemoGroup>
        </DemoPage>
    );
};
