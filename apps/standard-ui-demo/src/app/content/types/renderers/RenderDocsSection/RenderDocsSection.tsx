import type { DisplayLevel } from '@no-comply/standard-ui';
import { type Component, children } from 'solid-js';

import type { DocsSectionData } from '../../../types';
import { DocsSection } from '../../components';
import { RenderDocsItem } from '../RenderDocsItem';

export type RenderDocsSectionProps = {
    section: DocsSectionData;
    level: DisplayLevel;
};

export const RenderDocsSection: Component<RenderDocsSectionProps> = props => {
    const sectionProps = () => ({
        ...props.section.props,
        title: props.section.title,
    });

    const c = children(() => {
        return props.section.items.map(item => {
            if (item.type === 'item') {
                return <RenderDocsItem item={item} level={(props.level + 1) as DisplayLevel} />;
            } else {
                return (
                    <RenderDocsSection section={item} level={(props.level + 1) as DisplayLevel} />
                );
            }
        });
    });

    return <DocsSection {...sectionProps()}>{c()}</DocsSection>;
};
