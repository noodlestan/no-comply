import type { IconComponent } from '@noodlestan/context-ui';
import type {
    AriaAttributes,
    AriaLabelledAPI,
    AriaLabelledProps,
    AriaRegionElementProps,
} from '@noodlestan/context-ui-aria';

export type StaticMessageProps = AriaLabelledProps & {
    variant?: StaticMessageVariant;
};

export type StaticMessageVariant = 'passive' | 'success' | 'info' | 'warning' | 'danger';

export type StaticMessageAPI = {
    elProps: AriaRegionElementProps<'region'> & {
        'data-callout': StaticMessageVariant;
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
    iconProps: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
