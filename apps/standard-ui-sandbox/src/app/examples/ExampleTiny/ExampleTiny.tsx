import { Flex } from '@noodlestan/standard-ui';
import { type Component } from 'solid-js';

import { ExampleTinyContents } from '../ExampleTinyContents';

type Props = { title?: string };

export const ExampleTiny: Component<Props> = props => (
    <Flex padding="m" gap="m" direction="row" align="center">
        <ExampleTinyContents title={props.title} />
    </Flex>
);
