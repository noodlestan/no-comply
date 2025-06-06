import { type ActionIntent, type ActionVariant, Button, Flex } from '@no-comply/standard-ui';
import type { JSX } from 'solid-js';

type Props = {
    variant: ActionVariant;
    intent: ActionIntent;
};

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export const AllButtonVariantsAndIntents = (props: Props): JSX.Element => (
    <>
        <Flex direction="row" gap="l">
            <Button variant={props.variant} intent={props.intent}>
                {capitalize(props.variant)}
            </Button>
            <Button variant={props.variant} intent={props.intent} disabled>
                Disabled
            </Button>
        </Flex>
    </>
);
