import { type Component } from 'solid-js';

// import { ComponentMetadata } from '@/data/components';

import type { ComponentMetadata } from '../../../data';
import { ImportStatement } from '../ImportStatement';

type Props = {
    component: ComponentMetadata;
};

export const ComponentMeta: Component<Props> = props => {
    return (
        <div>
            <ImportStatement name={props.component.name} package={props.component.package} />
        </div>
    );
};
