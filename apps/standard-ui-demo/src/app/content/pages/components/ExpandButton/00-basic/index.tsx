import { shortId } from '@no-comply/solid-primitives';
import { ExpandButton, Label } from '@no-comply/standard-ui';
import { createSignal } from 'solid-js';

import { createDocsItemData, createDocsSectionData } from '../../../../types';
import { itemProps as props } from '../constants';

export default createDocsSectionData({
    title: 'Basic usage',
    items: [
        createDocsItemData({ props }, () => {
            const [expanded, setExpanded] = createSignal(false);
            const toggleExpanded = () => setExpanded(v => !v);
            const id = shortId();
            const labels = {
                expanded: 'Close section',
                collapsed: 'Show section',
            };

            return (
                <>
                    <ExpandButton
                        expanded={expanded()}
                        labels={labels}
                        controls={id}
                        onPress={toggleExpanded}
                    />
                    <Label id={id}>{expanded() ? 'Expanded' : 'Collapsed'}</Label>
                </>
            );
        }),
    ],
});
