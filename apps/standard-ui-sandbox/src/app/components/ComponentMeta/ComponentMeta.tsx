import { staticClassList } from '@noodlestan/context-ui-types';
import { type Component } from 'solid-js';

// import { ComponentMetadata } from '@/data/components';

import type { ComponentMetadata } from '../../../data';
import { ImportStatement } from '../ImportStatement';

import styles from './ComponentMeta.module.css';

type ComponentMetaProps = {
    component: ComponentMetadata;
};

export const ComponentMeta: Component<ComponentMetaProps> = props => {
    return (
        <div classList={staticClassList(styles, 'ComponentMeta')}>
            <ImportStatement name={props.component.name} package={props.component.package} />
        </div>
    );
};
