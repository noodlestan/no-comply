import type { IconComponent } from '@noodlestan/context-ui';
import type { AriaAttributes, AriaRegionAPI, AriaRegionProps } from '@noodlestan/context-ui-aria';

export type FeedbackMessageVariant = 'busy' | 'success' | 'error';

export type FeedbackMessageProps = Pick<AriaRegionProps, 'aria-describedby'> & {
    title: string;
    variant?: FeedbackMessageVariant;
};

export type FeedbackMessageAPI = {
    $root: AriaRegionAPI<'status' | 'alert'>['$root'] & {
        'aria-live': 'polite' | 'assertive';
        'data-feedback': FeedbackMessageVariant;
    };
    $title: AriaRegionAPI['$label'] & {
        children: string;
    };
    $description: AriaRegionAPI['$description'];
    iconProps: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
