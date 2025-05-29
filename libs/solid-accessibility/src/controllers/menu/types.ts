import type {
    AriaLabelledAPI,
    AriaLabelledProps,
    MenuRoleName,
} from '@no-comply/solid-accessibility';

export type AriaMenuProps = AriaLabelledProps & {
    role?: MenuRoleName;
};

export type AriaMenuAPI = AriaLabelledAPI & {
    $root: AriaLabelledAPI['$root'] & {
        role: MenuRoleName;
    };
};
