import { Display, Flex, Text } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { ShowText } from '..';

type Props = {
    p: string;
    l: number;
};

export const TextVariants: Component<Props> = props => {
    return (
        <ShowText p={props.p} l={props.l}>
            <Text variant="small">Lorem Ipsum</Text>
            <Text variant="normal">Lorem Ipsum</Text>
            <Text variant="medium">Lorem Ipsum</Text>
            <Text variant="large">Lorem Ipsum</Text>
        </ShowText>
    );
};

export const ShowTextVariants: Component = () => {
    return (
        <Flex direction="column" gap="l">
            <Display level={5}>100</Display>
            <Flex direction="column" gap="s">
                <TextVariants p="neutral" l={100} />
                <TextVariants p="green" l={100} />
                <TextVariants p="violet" l={100} />
                <TextVariants p="pink" l={100} />
            </Flex>
            <Display level={5}>200</Display>
            <Flex direction="column" gap="m">
                <TextVariants p="neutral" l={200} />
                <TextVariants p="green" l={200} />
                <TextVariants p="violet" l={200} />
                <TextVariants p="pink" l={200} />
            </Flex>
            <Display level={5}>300</Display>
            <Flex direction="column" gap="m">
                <TextVariants p="neutral" l={300} />
                <TextVariants p="green" l={300} />
                <TextVariants p="violet" l={300} />
                <TextVariants p="pink" l={300} />
            </Flex>
        </Flex>
    );
};
