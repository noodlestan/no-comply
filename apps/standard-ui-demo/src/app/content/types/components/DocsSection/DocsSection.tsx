import { type Component, splitProps } from 'solid-js';

import { BaseSection, type BaseSectionProps } from '../../../../templates';

export type DocsSectionProps = BaseSectionProps;

export const DocsSection: Component<DocsSectionProps> = props => {
    const [locals, others] = splitProps(props, ['children']);

    return <BaseSection {...others}>{locals.children}</BaseSection>;
};
