import { Display, Divider, IconButton, Text } from '@no-comply/standard-ui';
import { BikeIcon, CarIcon, CatIcon, DogIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemPropsStyled as props } from '../constants';

export default createDemoSectionData({
    title: 'orientation',
    items: [
        createDemoItem({ title: 'horizontal', props }, () => (
            <>
                <Display variant="m">Heading</Display>
                <Divider orientation="horizontal" />
                <Text variant="medium">Long Text</Text>
            </>
        )),
        createDemoItem(
            { title: 'vertical', props: { ...props, row: true, padding: 'm', gap: 'm' } },
            () => (
                <>
                    <IconButton icon={CatIcon} label="Cat" />
                    <IconButton icon={DogIcon} label="Dog" />
                    <Divider orientation="vertical" />
                    <IconButton icon={BikeIcon} label="BikeIcon" />
                    <IconButton icon={CarIcon} label="Car" />
                </>
            ),
        ),
    ],
});
