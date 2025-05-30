import type { ParentComponent } from 'solid-js';

import { BaseSection, type BaseSectionProps } from '../../../../../templates';

type Props = BaseSectionProps;

export const DemoSection: ParentComponent<Props> = props => {
    return <BaseSection {...props} />;
};
