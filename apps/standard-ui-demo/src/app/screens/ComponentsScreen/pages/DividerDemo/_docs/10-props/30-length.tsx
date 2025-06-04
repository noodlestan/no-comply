import { Divider } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../components';
import { VerticalDividerExample } from '../../examples';
import { itemProps as props, itemPropsStyled as propsStyled } from '../constants';

export default createDemoSectionData({
    title: 'length',
    items: [
        createDemoItem({ title: 'full (horizontal)', props }, () => <Divider length="full" />),
        createDemoItem({ title: 'l (horizontal)', props }, () => <Divider length="l" />),
        createDemoItem({ title: 'm (horizontal)', props }, () => <Divider length="m" />),
        createDemoItem({ title: 's (horizontal)', props }, () => <Divider length="s" />),
        createDemoItem(
            { title: 'number (rem) (horizontal)', props: { ...props, note: '7rem' } },
            () => <Divider length={7} />,
        ),
        createDemoItem({ title: 'full (vertical)', props: propsStyled }, () => (
            <VerticalDividerExample home="large">
                <Divider orientation="vertical" length="full" />
            </VerticalDividerExample>
        )),
        createDemoItem({ title: 'l (vertical)', props: propsStyled }, () => (
            <VerticalDividerExample items="medium">
                <Divider orientation="vertical" length="l" />
            </VerticalDividerExample>
        )),
        createDemoItem({ title: 'm (vertical)', props: propsStyled }, () => (
            <VerticalDividerExample>
                <Divider orientation="vertical" length="m" />
            </VerticalDividerExample>
        )),
        createDemoItem({ title: 's (vertical)', props: propsStyled }, () => (
            <VerticalDividerExample items="small">
                <Divider orientation="vertical" length="s" />
            </VerticalDividerExample>
        )),
        createDemoItem(
            { title: 'number (rem) (vertical)', props: { ...propsStyled, note: '7rem' } },
            () => (
                <VerticalDividerExample home="large">
                    <Divider orientation="vertical" length={7} />
                </VerticalDividerExample>
            ),
        ),
    ],
});
