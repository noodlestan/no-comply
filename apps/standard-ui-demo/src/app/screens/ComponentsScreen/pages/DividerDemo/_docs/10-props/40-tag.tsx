import { Divider, IconButton } from '@no-comply/standard-ui';
import { BikeIcon, DogIcon } from 'lucide-solid';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { itemProps as props, itemPropsStyled as propsStyled } from '../constants';

export default createDemoSectionData({
    title: 'tag',
    items: [
        createDemoItem({ title: 'hr', props: { ...props, defaultValue: true } }, () => (
            <Divider tag="hr" />
        )),
        createDemoItem({ title: 'div', props }, () => <Divider tag="div" />),
        createDemoItem({ title: 'span (horizontal)', props }, () => <Divider tag="span" />),
        createDemoItem({ title: 'span (vertical)', props: propsStyled }, () => (
            <>
                <IconButton icon={DogIcon} label="Dog" />
                <Divider tag="span" orientation="vertical" />
                <IconButton icon={BikeIcon} label="BikeIcon" />
            </>
        )),
    ],
});
