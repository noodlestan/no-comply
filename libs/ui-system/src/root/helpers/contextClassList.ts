import { ClassList } from '../_private';

import { contextClassNames } from './contextClassNames';

import { classListFromClassNames } from '.';

export const contextClassList = (): ClassList => {
    return classListFromClassNames(contextClassNames());
};
