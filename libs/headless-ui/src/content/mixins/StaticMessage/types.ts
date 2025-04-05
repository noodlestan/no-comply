import type { IconComponent } from '@noodlestan/context-ui';
import type {
    AriaAttributes,
    AriaLabelElementProps,
    AriaLabelledProps,
    AriaRegionElementProps,
} from '@noodlestan/context-ui-aria';

export type StaticMessageProps = AriaLabelledProps & {
    variant?: StaticMessageVariant;
};

export type StaticMessageVariant = 'passive' | 'success' | 'info' | 'warning' | 'danger';

export type StaticMessageElementProps = AriaRegionElementProps<'region'> & {
    'data-callout': StaticMessageVariant;
};

export type StaticMessageIconProps = Pick<AriaAttributes, 'aria-label'> & {
    icon: IconComponent;
};

export type StaticMessageAPI = {
    elProps: StaticMessageElementProps;
    labelProps: AriaLabelElementProps;
    iconProps: StaticMessageIconProps;
};
