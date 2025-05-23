import type {
    AriaLabelledAPI,
    AriaLabelledProps,
    MenuItemRoleName,
} from '@noodlestan/context-ui-aria';

export type AriaMenuItemProps = AriaLabelledProps & {
    role?: MenuItemRoleName;
};

export type AriaMenuItemAPI = AriaLabelledAPI & {
    $root: AriaLabelledAPI['$root'] & {
        role: MenuItemRoleName;
    };
};
