import type { IconComponent } from '@noodlestan/context-ui';
import type {
    AriaAttributes,
    AriaLabelElementProps,
    AriaLabelledProps,
    AriaRegionElementProps,
} from '@noodlestan/context-ui-aria';

export type FeedbackMessageProps = AriaLabelledProps & {
    variant?: FeedbackMessageVariant;
};

export type FeedbackMessageVariant = 'busy' | 'success' | 'error';

export type FeedbackMessageElementProps = AriaRegionElementProps & {
    role: 'status' | 'alert';
    'aria-live': 'polite' | 'assertive';
    'data-feedback': FeedbackMessageVariant;
};

export type FeedbackMessageIconProps = Pick<AriaAttributes, 'aria-label'> & {
    icon: IconComponent;
};

export type FeedbackMessageAPI = {
    elProps: FeedbackMessageElementProps;
    labelProps: AriaLabelElementProps;
    iconProps: FeedbackMessageIconProps;
};
