import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Surface } from '@noodlestan/standard-ui';
import { type ParentComponent } from 'solid-js';

import { ScreenTemplateBase } from '../../templates';

import styles from './FoundationsScreen.module.css';
import { ColorsPage } from './pages';

export const FoundationsScreen: ParentComponent = () => {
    return (
        <ScreenTemplateBase>
            <Surface variant="stage" classList={staticClassList(styles, 'FoundationsScreen')}>
                <ColorsPage />
            </Surface>
        </ScreenTemplateBase>
    );
};
