import type {
    AriaLabelledAPI,
    AriaLabelledProps,
    AriaRegionAPI,
    MenuRoleName,
} from '@noodlestan/context-ui-aria';

export type AriaMenuProps = AriaLabelledProps & {
    role?: MenuRoleName;
};

export type AriaMenuAPI = AriaLabelledAPI & {
    $root: AriaRegionAPI<MenuRoleName>['$root'];
};
