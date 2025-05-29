import { staticClassList } from '@no-comply/solid-primitives';
import { type Component } from 'solid-js';

// import { ComponentMetadata } from '@/data/components';

import type { ComponentMetadata } from '../../../data';
import { ImportStatement } from '../ImportStatement';

import styles from './ComponentMeta.module.css';

type Props = {
    component: ComponentMetadata;
};

export const ComponentMeta: Component<Props> = props => {
    return (
        <div classList={staticClassList(styles, 'ComponentMeta')}>
            <ImportStatement name={props.component.name} package={props.component.package} />
        </div>
    );
};
