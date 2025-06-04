import { Button, Callout, Flex, Text } from '@no-comply/standard-ui';

import {
    LoremIpsum,
    createDemoItem,
    createDemoSectionData,
    lipsumWords,
} from '../../../../../../components';
import { itemProps as props } from '../constants';

export default createDemoSectionData({
    title: 'children',
    items: [
        createDemoItem({ props }, () => (
            <Callout title={lipsumWords(3)} size="medium">
                <Flex gap="m" direction="column">
                    <Text variant="medium">
                        <LoremIpsum words={5} />
                    </Text>
                    <LoremIpsum words={30} />
                    <Flex gap="m" direction="row" justify="end">
                        <Button variant="plain">Cancel</Button>
                        <Button>Accept</Button>
                    </Flex>
                </Flex>
            </Callout>
        )),
    ],
});
