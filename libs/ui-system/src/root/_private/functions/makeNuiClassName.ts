import { NUI_CLASSNAME_SEPARATOR, NUI_PREFIX } from '../../constants';

export const makeNuiClassName = (...className: string[]): string =>
    `${NUI_PREFIX}${NUI_CLASSNAME_SEPARATOR}${className.join(NUI_CLASSNAME_SEPARATOR)}`;
