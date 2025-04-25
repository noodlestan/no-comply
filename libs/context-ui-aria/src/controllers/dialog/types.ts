import type { AriaLabelledAPI, AriaLabelledProps } from '../label';
import type { AriaRegionElementProps } from '../region';

export type AriaDialogProps = AriaLabelledProps;

export interface AriaDialogAPI {
    elProps: AriaRegionElementProps<'dialog'>;
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
}
