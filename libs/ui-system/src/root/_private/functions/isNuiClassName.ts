import { NUI_PREFIX } from '../../constants';

export const isNuiClassName = (className: string): boolean => className.startsWith(NUI_PREFIX);
