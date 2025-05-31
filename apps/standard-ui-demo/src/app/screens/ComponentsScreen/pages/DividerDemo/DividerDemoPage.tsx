import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Divider, Flex, IconButton, Label, Surface, Text } from '@no-comply/standard-ui';
import { BikeIcon, CarIcon, CatIcon, DogIcon, HomeIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import { findComponent } from '../../../../../data';
import { ComponentDemoPage, DemoItem, DemoSection } from '../../private';

import styles from './DividerDemoPage.module.scss';

const DividerVariants: Component = () => {
    return (
        <Flex gap="xl">
            <Label>default</Label>
            <Divider />
            <Label>alt</Label>
            <Divider variant="alt" />
            <Label>strong</Label>
            <Divider variant="strong" />
            <Label>muted</Label>
            <Divider variant="muted" />
        </Flex>
    );
};

export const DividerDemoPage: Component = () => {
    const COMPONENT = findComponent('Divider');

    return (
        <ComponentDemoPage
            component={COMPONENT}
            classList={staticClassList(styles, 'DividerDemoPage')}
        >
            <DemoSection title="defaults">
                <DemoItem padding="l">
                    <Divider />
                </DemoItem>
            </DemoSection>

            <DemoSection title="variant">
                <DemoItem title="base" padding="l">
                    <Divider variant="base" />
                </DemoItem>
                <DemoItem title="alt" padding="l">
                    <Divider variant="alt" />
                </DemoItem>
                <DemoItem title="strong" padding="l">
                    <Divider variant="strong" />
                </DemoItem>
                <DemoItem title="muted" padding="l">
                    <Divider variant="muted" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="orientation">
                <DemoItem title="horizontal" padding="m" gap="l">
                    <Display variant="m">Heading</Display>
                    <Divider orientation={'horizontal'} />
                    <Text variant="medium">Long Text</Text>
                </DemoItem>
                <DemoItem title="vertical" row padding="m" gap="m">
                    <IconButton icon={CatIcon} label="Cat" />
                    <IconButton icon={DogIcon} label="Dog" />
                    <Divider orientation={'vertical'} />
                    <IconButton icon={BikeIcon} label="BikeIcon" />
                    <IconButton icon={CarIcon} label="Car" />
                </DemoItem>
            </DemoSection>

            <DemoSection title="length" undertitle="horizontal">
                <DemoItem title="full" padding="m" gap="m">
                    <Divider length={'full'} />
                </DemoItem>
                <DemoItem title="l" padding="m" gap="m">
                    <Divider length={'l'} />
                </DemoItem>
                <DemoItem title="m" padding="m" gap="m">
                    <Divider length={'m'} />
                </DemoItem>
                <DemoItem title="s" padding="m" gap="m">
                    <Divider length={'s'} />
                </DemoItem>
                <DemoItem title="number (rem)" padding="m" gap="m" note="7rem">
                    <Divider length={7} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="length" undertitle="vertical">
                <DemoItem title="full" padding="m" gap="m">
                    <Flex direction="row" gap="m" align="center">
                        <IconButton icon={HomeIcon} label="Cat" size="large" />
                        <IconButton icon={CatIcon} label="Cat" />
                        <IconButton icon={DogIcon} label="Dog" />
                        <Divider orientation={'vertical'} length={'full'} />
                        <IconButton icon={BikeIcon} label="BikeIcon" />
                        <IconButton icon={CarIcon} label="Car" />
                    </Flex>
                </DemoItem>
                <DemoItem title="l" padding="m" gap="m">
                    <Flex direction="row" gap="m" align="center">
                        <IconButton icon={CatIcon} label="Cat" size="medium" />
                        <IconButton icon={DogIcon} label="Dog" size="medium" />
                        <Divider orientation={'vertical'} length={'l'} />
                        <IconButton icon={BikeIcon} label="BikeIcon" size="medium" />
                        <IconButton icon={CarIcon} label="Car" size="medium" />
                    </Flex>
                </DemoItem>
                <DemoItem title="m" padding="m" gap="m">
                    <Flex direction="row" gap="m" align="center">
                        <IconButton icon={CatIcon} label="Cat" />
                        <IconButton icon={DogIcon} label="Dog" />
                        <Divider orientation={'vertical'} length={'m'} />
                        <IconButton icon={BikeIcon} label="BikeIcon" />
                        <IconButton icon={CarIcon} label="Car" />
                    </Flex>
                </DemoItem>
                <DemoItem title="s" padding="m" gap="m">
                    <Flex direction="row" gap="m" align="center">
                        <IconButton icon={CatIcon} label="Cat" size="small" />
                        <IconButton icon={DogIcon} label="Dog" size="small" />
                        <Divider orientation={'vertical'} length={'s'} />
                        <IconButton icon={BikeIcon} label="BikeIcon" size="small" />
                        <IconButton icon={CarIcon} label="Car" size="small" />
                    </Flex>
                </DemoItem>
                <DemoItem title="number (rem)" padding="m" gap="m" note="7rem">
                    <Flex direction="row" gap="m" align="center">
                        <IconButton icon={HomeIcon} label="Cat" size="large" />
                        <IconButton icon={CatIcon} label="Cat" />
                        <IconButton icon={DogIcon} label="Dog" />
                        <Divider orientation={'vertical'} length={7} />
                        <IconButton icon={BikeIcon} label="BikeIcon" />
                        <IconButton icon={CarIcon} label="Car" />
                    </Flex>
                </DemoItem>
            </DemoSection>

            <DemoSection title="tag">
                <DemoItem title="hr" padding="m">
                    <Divider tag={'hr'} />
                </DemoItem>
                <DemoItem title="l" padding="m">
                    <Divider tag={'div'} />
                </DemoItem>
                <DemoItem title="m" padding="m">
                    <Divider tag={'span'} />
                </DemoItem>
            </DemoSection>

            <DemoSection title="On surface">
                <DemoItem title="on stage" padding="l">
                    <Surface variant="stage" padding="l">
                        <DividerVariants />
                    </Surface>
                </DemoItem>
                <DemoItem title="on page" padding="l">
                    <Surface variant="page" padding="l">
                        <DividerVariants />
                    </Surface>
                </DemoItem>
                <DemoItem title="on card" padding="l">
                    <Surface variant="card" padding="l">
                        <DividerVariants />
                    </Surface>
                </DemoItem>
                <DemoItem title="on message" padding="l">
                    <Surface variant="message" padding="l" data-message="info">
                        <DividerVariants />
                    </Surface>
                </DemoItem>
                <DemoItem title="on inverse" padding="l">
                    <Surface variant="inverse" padding="l">
                        <DividerVariants />
                    </Surface>
                </DemoItem>
                <DemoItem title="on menu" padding="l">
                    <Surface variant="menu" padding="l">
                        <DividerVariants />
                    </Surface>
                </DemoItem>
            </DemoSection>

            <DemoSection title="override">
                <DemoItem row note="Should override background color">
                    <Divider length={'full'} classList={staticClassList(styles, 'override')} />
                </DemoItem>
            </DemoSection>
        </ComponentDemoPage>
    );
};
