import { ActionLabel, Display, Flex, Label, Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { DemoPage } from '../../../../../templates';

export const TypographyVariantsPage: Component = () => {
    return (
        <DemoPage title="Variants">
            <Display level={3}>Display</Display>

            <Flex direction="column" gap="l">
                <Display variant="hero">Display Variant Hero</Display>
                <Display variant="xl">Display Variant XL (Level 1)</Display>
                <Display variant="l">Display Variant L (Level 2)</Display>
                <Display variant="m">Display Variant M (Level 3)</Display>
                <Display variant="s">Display Variant S (Level 4)</Display>
                <Display variant="xs">Display Variant XS (Level 5)</Display>
            </Flex>

            <Display level={3}>Text</Display>

            <Flex direction="column" gap="l">
                <Text variant="large">Lorem ipsum dolor sit amet.</Text>
                <Text variant="medium">Lorem ipsum dolor sit amet.</Text>
                <Text variant="normal">Lorem ipsum dolor sit amet.</Text>
                <Text variant="small">Lorem ipsum dolor sit amet.</Text>
            </Flex>

            <Display level={3}>Label</Display>

            <Flex direction="column" gap="l">
                <Label size="large">Lorem ipsum dolor sit amet.</Label>
                <Label size="medium">Lorem ipsum dolor sit amet.</Label>
                <Label size="normal">Lorem ipsum dolor sit amet.</Label>
                <Label size="small">Lorem ipsum dolor sit amet.</Label>
            </Flex>

            <Display level={3}>Action</Display>

            <Flex direction="column" gap="l">
                <ActionLabel size="large">Lorem ipsum dolor sit amet.</ActionLabel>
                <ActionLabel size="medium">Lorem ipsum dolor sit amet.</ActionLabel>
                <ActionLabel size="normal">Lorem ipsum dolor sit amet.</ActionLabel>
                <ActionLabel size="small">Lorem ipsum dolor sit amet.</ActionLabel>
            </Flex>
        </DemoPage>
    );
};
