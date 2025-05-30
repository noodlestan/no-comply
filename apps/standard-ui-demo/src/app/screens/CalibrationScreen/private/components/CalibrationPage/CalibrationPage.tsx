import type { ParentComponent } from 'solid-js';

import { BasePage, type BasePageProps } from '../../../../../templates';

type Props = BasePageProps;

export const CalibrationPage: ParentComponent<Props> = props => {
    return <BasePage {...props} />;
};
