import { staticClassList } from '@noodlestan/context-ui-primitives';
import { Flex } from '@noodlestan/standard-ui';
import { type ParentComponent } from 'solid-js';

import styles from './ShowText.module.css';

type Props = {
    p: string;
    l: number;
};

export const ShowText: ParentComponent<Props> = props => {
    const style = () => ({
        '--__show-text-p': `var(--p-${props.p})`,
        '--__show-text-l': props.l,
    });
    return (
        <Flex
            classList={staticClassList(styles, 'ShowText')}
            direction="row"
            gap="m"
            style={style()}
        >
            {props.children}
        </Flex>
    );
};
