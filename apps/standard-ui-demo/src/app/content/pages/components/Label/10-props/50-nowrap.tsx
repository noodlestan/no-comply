import { Label } from '@no-comply/standard-ui';

import { LoremIpsum } from '../../../../components';
import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemPropsWrap as props } from '../constants';

export default createDocsSectionData({
    title: 'nowrap ',
    items: [
        createDocsItemData({ title: 'true', props }, () => (
            <Label variant="normal" nowrap>
                <LoremIpsum words={50} />
            </Label>
        )),
        createDocsItemData({ title: 'false', props: { ...props, defaultValue: true } }, () => (
            <Label variant="normal">
                <LoremIpsum words={50} />
            </Label>
        )),
    ],
});
