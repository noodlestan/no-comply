import { createDocsSectionData } from '../../../../types';

import gap from './10-gap';
import gapShorthands from './11-gap-shorthand';
import gapLonghands from './12-gap-longhands';
import direction from './20-direction';
import align from './21-align';
import justify from './22-justify';
import shrink from './40-shrink';
import wrap from './41-wrap';
import inline from './42-inline';
import tag from './90-tag';

export default createDocsSectionData({
    title: 'Props',
    items: [gap, gapShorthands, gapLonghands, direction, align, justify, shrink, wrap, inline, tag],
});
