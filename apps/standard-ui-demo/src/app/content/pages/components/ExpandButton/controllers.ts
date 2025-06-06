import { shortId } from '@no-comply/solid-primitives';
import { type ExpandButtonProps } from '@no-comply/standard-ui';
import { type Accessor, createSignal } from 'solid-js';

type ExpandButtonExampleController = {
    expanded: Accessor<boolean>;
    expandedText: Accessor<string>;
    labels: ExpandButtonProps['labels'];
    id: string;
    toggleExpanded: () => void;
};

export const createExpandButtonExampleController = (): ExpandButtonExampleController => {
    const [expanded, setExpanded] = createSignal(false);
    const toggleExpanded = () => setExpanded(v => !v);
    const id = shortId();
    const labels = {
        expanded: 'Close section',
        collapsed: 'Show section',
    };

    const expandedText = () => (expanded() ? 'Expanded' : 'Collapsed');

    return { expanded, expandedText, id, labels, toggleExpanded };
};
