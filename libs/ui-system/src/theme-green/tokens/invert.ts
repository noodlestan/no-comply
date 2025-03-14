import { TokenMap } from '../../root';

import { color } from './invert/color';
import { surfaces } from './invert/surfaces';

const global: TokenMap = {
    ...color,
};

export const invert = {
    global,
    surfaces,
};
