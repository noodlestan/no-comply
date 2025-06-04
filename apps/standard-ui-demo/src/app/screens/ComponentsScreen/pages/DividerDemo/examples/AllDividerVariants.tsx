import { Divider, Flex, Label } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

export const AllDividerVariants: Component = () => (
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
