import type {
    AriaLabelledAPI,
    AriaLabelledProps,
    MenuItemRoleName,
} from '@no-comply/solid-accessibility';

export type AriaMenuItemProps = AriaLabelledProps & {
    role?: MenuItemRoleName;
};

export type AriaMenuItemAPI = AriaLabelledAPI & {
    $root: AriaLabelledAPI['$root'] & {
        role: MenuItemRoleName;
    };
};
