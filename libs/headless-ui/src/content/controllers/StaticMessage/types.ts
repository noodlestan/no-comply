import type { IconComponent } from '@noodlestan/context-ui';
import type { AriaAttributes, AriaRegionAPI, AriaRegionProps } from '@noodlestan/context-ui-aria';

export type StaticMessageProps = Pick<AriaRegionProps, 'aria-describedby'> & {
    title: string;
    variant?: StaticMessageVariant;
};

export type StaticMessageVariant = 'passive' | 'success' | 'info' | 'warning' | 'danger';

export type StaticMessageAPI = {
    $root: AriaRegionAPI<'note'>['$root'] & {
        'data-message': StaticMessageVariant;
    };
    $title: AriaRegionAPI['$label'] & {
        children: string;
    };
    $description: AriaRegionAPI['$description'];
    iconProps: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
