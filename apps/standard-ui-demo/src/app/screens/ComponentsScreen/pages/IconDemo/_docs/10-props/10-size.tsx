import { Icon } from '@no-comply/standard-ui';
import { ClockIcon } from 'lucide-solid';

import { createDemoItem, createDemoSection } from '../../../../../../components';

export default createDemoSection({
    title: 'size',
    items: [
        createDemoItem({ title: 'large', props: { row: true } }, () => (
            <Icon icon={ClockIcon} size="large" />
        )),
        createDemoItem({ title: 'medium', props: { row: true } }, () => (
            <Icon icon={ClockIcon} size="medium" />
        )),
        createDemoItem({ title: 'normal', props: { row: true } }, () => (
            <Icon icon={ClockIcon} size="normal" />
        )),
        createDemoItem({ title: 'small', props: { row: true } }, () => (
            <Icon icon={ClockIcon} size="small" />
        )),
    ],
});
