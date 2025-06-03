import { type Component, splitProps } from 'solid-js';

import { BaseSection, type BaseSectionProps } from '../../../templates';

export type DemoSectionProps = BaseSectionProps;

export const DemoSection: Component<DemoSectionProps> = props => {
    const [locals, others] = splitProps(props, ['children']);

    return <BaseSection {...others}>{locals.children}</BaseSection>;
};
