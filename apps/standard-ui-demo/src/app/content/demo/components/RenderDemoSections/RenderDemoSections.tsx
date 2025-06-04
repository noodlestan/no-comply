import { type Component, For } from 'solid-js';

import type { DemoSectionData } from '../../types';
import { RenderDemoSection } from '../RenderDemoSection';

export type RenderDemoSectionsProps = {
    sections: DemoSectionData[];
};

export const RenderDemoSections: Component<RenderDemoSectionsProps> = props => {
    return (
        <>
            !!
            <For each={props.sections}>
                {section => <RenderDemoSection section={section} level={3} />}
            </For>
        </>
    );
};
