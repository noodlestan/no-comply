import { staticClassList } from '@noodlestan/context-ui-types';
import { type Component } from 'solid-js';

import styles from './ImportStatement.module.css';

type ImportStatementProps = {
    name: string;
    package: string;
};

export const ImportStatement: Component<ImportStatementProps> = props => {
    const statement = () => `import { ${props.name} } from '${props.package}';`;

    return (
        <div classList={staticClassList(styles, 'ImportStatement')}>
            <code>{statement()}</code>
        </div>
    );
};
