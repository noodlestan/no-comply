import { TokenMap } from '../../root';

import { color } from './base/color';
import { surfaces } from './base/surfaces';

const global: TokenMap = {
    ...color,
};

export const base = {
    global,
    surfaces,
};
