import { TokenMap } from '../../root/types';

import { color } from './base/color';
import { surfaces } from './base/surfaces';

const global: TokenMap = {
    ...color,
};

export const base = {
    global,
    surfaces,
};
