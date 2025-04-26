import type { IconComponent } from '@noodlestan/context-ui';
import type {
    AriaAttributes,
    AriaLabelledAPI,
    AriaLabelledProps,
    AriaRegionAPI,
} from '@noodlestan/context-ui-aria';

export type FeedbackMessageVariant = 'busy' | 'success' | 'error';

export type FeedbackMessageProps = AriaLabelledProps & {
    variant?: FeedbackMessageVariant;
};

export type FeedbackMessageAPI = {
    $root: AriaRegionAPI['$root'] & {
        role: 'status' | 'alert';
        'aria-live': 'polite' | 'assertive';
        'data-feedback': FeedbackMessageVariant;
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    iconProps: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
