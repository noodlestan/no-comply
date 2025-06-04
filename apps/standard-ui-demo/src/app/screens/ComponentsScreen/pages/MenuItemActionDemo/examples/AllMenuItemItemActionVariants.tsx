import { type ActionIntent, MenuItemAction } from '@no-comply/standard-ui';
import type { JSX } from 'solid-js';

type Props = {
    intent: ActionIntent;
};

export const AllMenuItemItemActionVariants = (props: Props): JSX.Element => (
    <>
        <MenuItemAction variant="plain" intent={props.intent} label="Plain" />
        <MenuItemAction variant="secondary" intent={props.intent} label="Secondary" />
        <MenuItemAction variant="plain" intent={props.intent} disabled label="Disabled" />
    </>
);
