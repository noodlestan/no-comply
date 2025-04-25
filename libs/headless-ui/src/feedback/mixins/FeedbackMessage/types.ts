import type { IconComponent } from '@noodlestan/context-ui';
import type {
    AriaAttributes,
    AriaLabelledAPI,
    AriaLabelledProps,
    AriaRegionElementProps,
} from '@noodlestan/context-ui-aria';

export type FeedbackMessageProps = AriaLabelledProps & {
    variant?: FeedbackMessageVariant;
};

export type FeedbackMessageVariant = 'busy' | 'success' | 'error';

export type FeedbackMessageAPI = {
    elProps: AriaRegionElementProps & {
        role: 'status' | 'alert';
        'aria-live': 'polite' | 'assertive';
        'data-feedback': FeedbackMessageVariant;
    };
    labelProps: AriaLabelledAPI['labelProps'];
    descriptionProps: AriaLabelledAPI['descriptionProps'];
    iconProps: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
