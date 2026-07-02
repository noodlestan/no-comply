import type { ToggleActionLabelsProp } from '@no-comply/solid-composables';
import { computedProps, shortId } from '@no-comply/solid-primitives';
import {
	Button,
	Display,
	Flex,
	IconButton,
	Link,
	Menu,
	MenuItemAction,
	NavLink,
	Surface,
	Text,
	ToggleButton,
} from '@no-comply/standard-ui';
import ClockIcon from 'lucide-solid/icons/clock';
import { type Component, createSignal } from 'solid-js';

import { ResourcesPage } from '../../../private';

export const InteractionsActionsPage: Component = () => {
	const [disabled, setDisabled] = createSignal(false);

	const $ = computedProps({
		disabled,
	});

	const toolbarLabelId = shortId();

	return (
		<ResourcesPage title="Actions and Links">
			<Surface variant="panel" role="toolbar" padding="xs" aria-labelledby={toolbarLabelId}>
				<Flex direction="row" align="center" gap="l" wrap>
					<Text tag="h3" size="small" id={toolbarLabelId}>
						Apply to all
					</Text>
					<Flex direction="row" gap="xs" wrap>
						<ToggleButton
							size="small"
							variant="secondary"
							value={disabled()}
							onPress={() => setDisabled(v => !v)}
							labels="Disabled"
						/>
					</Flex>
				</Flex>
			</Surface>

			<Display level={3}>Link</Display>

			<Flex direction="row" gap="l" align="center" wrap>
				<Link href="/" {...$}>
					Link
				</Link>
				<NavLink href="/" {...$}>
					NavLink
				</NavLink>
				<NavLink current href="/" {...$}>
					NavLink (current)
				</NavLink>
				<NavLink href="/" {...$} layout="v" highlight="after">
					NavLink
				</NavLink>
				<NavLink current href="/" layout="v" highlight="after" {...$}>
					NavLink (current)
				</NavLink>
			</Flex>

			<Display level={3}>Button</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<Button variant="primary" intent="positive" {...$}>
						primary + positive
					</Button>
					<Button variant="primary" intent="negative" {...$}>
						primary + negative
					</Button>
					<Button variant="primary" intent="neutral" {...$}>
						primary + neutral
					</Button>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Button variant="secondary" intent="positive" {...$}>
						secondary + positive
					</Button>
					<Button variant="secondary" intent="negative" {...$}>
						secondary + negative
					</Button>
					<Button variant="secondary" intent="neutral" {...$}>
						secondary + neutral
					</Button>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Button variant="plain" intent="positive" {...$}>
						plain + positive
					</Button>
					<Button variant="plain" intent="negative" {...$}>
						plain + negative
					</Button>
					<Button variant="plain" intent="neutral" {...$}>
						plain + neutral
					</Button>
				</Flex>
			</Flex>

			<Display level={3}>Icon Button</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<IconButton
						icon={ClockIcon}
						label="primary + positive"
						variant="primary"
						intent="positive"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="primary + negative"
						variant="primary"
						intent="negative"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="primary + neutral"
						variant="primary"
						intent="neutral"
						{...$}
					/>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<IconButton
						icon={ClockIcon}
						label="secondary + positive"
						variant="secondary"
						intent="positive"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="secondary + negative"
						variant="secondary"
						intent="negative"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="secondary + neutral"
						variant="secondary"
						intent="neutral"
						{...$}
					/>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<IconButton
						icon={ClockIcon}
						label="plain + positive"
						variant="plain"
						intent="positive"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="plain + negative"
						variant="plain"
						intent="negative"
						{...$}
					/>
					<IconButton
						icon={ClockIcon}
						label="plain + neutral"
						variant="plain"
						intent="neutral"
						{...$}
					/>
				</Flex>
			</Flex>

			<Display level={3}>Toggle Button</Display>

			<Flex direction="column" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<ToggleButton variant="primary" {...$} value={false} />
					<ToggleButton variant="primary" {...$} value={true} />
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<ToggleButton variant="secondary" {...$} value={false} />
					<ToggleButton variant="secondary" {...$} value={true} />
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<ToggleButton variant="plain" {...$} value={false} />
					<ToggleButton variant="plain" {...$} value={true} />
				</Flex>
			</Flex>

			<Display level={3}>Menu Item</Display>

			<Flex direction="row" gap="l" wrap>
				<Flex direction="row" align="center" gap="l" wrap>
					<Menu>
						<MenuItemAction variant="primary" intent="positive" label="primary + positive" />
						<MenuItemAction variant="primary" intent="negative" label="primary + negative" />
						<MenuItemAction variant="primary" intent="neutral" label="primary + neutral" />
					</Menu>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Menu>
						<MenuItemAction variant="secondary" intent="positive" label="secondary + positive" />
						<MenuItemAction variant="secondary" intent="negative" label="secondary + negative" />
						<MenuItemAction variant="secondary" intent="neutral" label="secondary + neutral" />
					</Menu>
				</Flex>
				<Flex direction="row" align="center" gap="l" wrap>
					<Menu>
						<MenuItemAction variant="plain" intent="positive" label="plain + positive" />
						<MenuItemAction variant="plain" intent="negative" label="plain + negative" />
						<MenuItemAction variant="plain" intent="neutral" label="plain + neutral" />
					</Menu>
				</Flex>
			</Flex>
		</ResourcesPage>
	);
};
