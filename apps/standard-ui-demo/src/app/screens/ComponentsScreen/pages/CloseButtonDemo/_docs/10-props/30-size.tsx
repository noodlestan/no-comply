import { CloseButton } from '@no-comply/standard-ui';

import { createDemoItem, createDemoSectionData } from '../../../../../../content';
import { itemProps as props } from '../constants';

const large = createDemoItem({ title: 'large', props }, () => (
    <CloseButton label="Close" size="large" />
));

const medium = createDemoItem({ title: 'medium', props }, () => (
    <CloseButton label="Close" size="medium" />
));

const normal = createDemoItem({ title: 'normal', props: { ...props, defaultValue: true } }, () => (
    <CloseButton label="Close" size="normal" />
));

const small = createDemoItem({ title: 'small', props }, () => (
    <CloseButton label="Close" size="small" />
));

export default createDemoSectionData({
    title: 'size',
    items: [large, medium, normal, small],
});
