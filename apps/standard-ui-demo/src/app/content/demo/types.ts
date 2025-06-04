import type { JSX } from 'solid-js';

import type { DemoItemProps } from './components/DemoItem';
import type { DemoSectionProps } from './components/DemoSection';

export type DemoSectionData = {
    type: 'section';
    title: string;
    props?: DemoSectionProps;
    items: (DemoSectionData | DemoItemData)[];
};

export type DemoItemData = {
    type: 'item';
    title?: string;
    props?: DemoItemProps;
    content: () => JSX.Element;
};
