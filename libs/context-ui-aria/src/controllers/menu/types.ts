import type { AriaLabelledAPI, AriaLabelledProps, MenuRoleName } from '@noodlestan/context-ui-aria';

export type AriaMenuProps = AriaLabelledProps & {
    role?: MenuRoleName;
};

export type AriaMenuAPI = AriaLabelledAPI & {
    $root: AriaLabelledAPI['$root'] & {
        role: MenuRoleName;
    };
};
