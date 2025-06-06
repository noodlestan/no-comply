import { type Component } from 'solid-js';

import { lipsumChars } from './lipsumChars';
import { lipsumWords } from './lipsumWords';

type Props = {
    words?: number;
    chars?: number;
};

export const LoremIpsum: Component<Props> = props => {
    const text = () => (props.chars ? lipsumChars(props.chars) : lipsumWords(props.words));
    return <>{text()}</>;
};
