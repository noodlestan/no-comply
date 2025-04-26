import type { IconComponent } from '@noodlestan/context-ui';
import type {
    AriaAttributes,
    AriaLabelledAPI,
    AriaLabelledProps,
    AriaRegionAPI,
} from '@noodlestan/context-ui-aria';

export type StaticMessageProps = AriaLabelledProps & {
    variant?: StaticMessageVariant;
};

export type StaticMessageVariant = 'passive' | 'success' | 'info' | 'warning' | 'danger';

export type StaticMessageAPI = {
    $root: AriaRegionAPI<'region'>['$root'] & {
        'data-callout': StaticMessageVariant;
    };
    $label: AriaLabelledAPI['$label'];
    $description: AriaLabelledAPI['$description'];
    $icon: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
