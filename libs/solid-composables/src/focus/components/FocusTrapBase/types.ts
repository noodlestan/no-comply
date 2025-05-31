import type { FocusTrapAPI, FocusTrapProps } from '../../controllers';

export type FocusTrapBaseProps = FocusTrapProps;

export type FocusTrapBaseAPI = Omit<FocusTrapAPI, '$root'> & {
    $root: FocusTrapAPI['$root'];
};
