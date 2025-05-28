import type { IconComponent } from '@noodlestan/context-ui';
import type { AriaAttributes, AriaRegionAPI, AriaRegionProps } from '@noodlestan/context-ui-aria';

export type ContentMessageProps = Pick<AriaRegionProps, 'aria-describedby'> & {
    title: string;
    variant: string;
    icon: IconComponent;
};

export type ContentMessageAPI = {
    $root: AriaRegionAPI<'note' | 'status' | 'alert'>['$root'] & {
        'data-message': string;
    };
    $title: AriaRegionAPI['$label'] & {
        children: string;
    };
    $description: AriaRegionAPI['$description'];
    iconProps: Pick<AriaAttributes, 'aria-label'> & {
        icon: IconComponent;
    };
};
