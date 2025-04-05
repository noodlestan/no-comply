import type { AriaLabelElementProps, AriaLabelledProps } from '../../label';
import type { AriaRegionElementProps } from '../region';

export type AriaDialogProps = AriaLabelledProps;

export type AriaDialogElementProps = AriaRegionElementProps<'dialog'>;

export interface AriaDialogAPI {
    elProps: AriaDialogElementProps;
    labelProps: AriaLabelElementProps;
}
