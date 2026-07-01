import {
	AlignFirstLine,
	Button,
	Display,
	DisplayAligned,
	Flex,
	Icon,
	IconButton,
	Surface,
	Text,
} from '@no-comply/standard-ui';
import SquareStackIcon from 'lucide-solid/icons/square-stack';
import { type Component } from 'solid-js';

import { LoremIpsum } from '../../../../../content';
import { ResourcesPage } from '../../../private';

export const LargeCompositionsPage: Component = () => {
	return (
		<ResourcesPage title="Large Compositions">
			<Display level={3}>Hero</Display>

			<Surface variant="page">
				<Flex direction="row" gap="2xl" align="start" justify="between">
					<AlignFirstLine height="l" type="display" variant="hero">
						<Flex direction="column" gap="2xl">
							<Flex direction="column" gap="xl">
								<DisplayAligned>Display Hero</DisplayAligned>
								<Display variant="l" tag="p">
									And Display L
								</Display>
								<Text variant="large">
									<LoremIpsum words={33} />
								</Text>
							</Flex>
							<Flex direction="row" gap="xl">
								<Button intent="positive" size="large">
									Large
								</Button>
								<Button intent="negative" variant="secondary" size="large">
									Large
								</Button>
							</Flex>
						</Flex>
						<IconButton size="medium" icon={SquareStackIcon} label="large" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>XL</Display>

			<Surface variant="stage" padding="l">
				<Flex direction="row" gap="xl" align="start" justify="between">
					<AlignFirstLine height="m" type="display" variant="xl">
						<Icon size="large" icon={SquareStackIcon} aligned />
						<Flex direction="column" gap="2xl">
							<Flex direction="column" gap="xl">
								<DisplayAligned>Display XL (H1)</DisplayAligned>
								<Display variant="l" tag="p">
									And Display L
								</Display>
								<Text variant="large">
									<LoremIpsum words={33} />
								</Text>
							</Flex>
							<Flex direction="row" gap="xl">
								<Button intent="positive" size="medium">
									Medium
								</Button>
								<Button intent="negative" variant="secondary" size="medium">
									Medium
								</Button>
							</Flex>
						</Flex>
						<IconButton size="medium" icon={SquareStackIcon} label="large" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>L</Display>

			<Surface variant="card" padding="l">
				<Flex direction="row" gap="xl" align="start" justify="between">
					<AlignFirstLine height="m" type="display" variant="l">
						<Icon size="large" icon={SquareStackIcon} aligned />
						<Flex direction="column" gap="2xl">
							<Flex direction="column" gap="l">
								<DisplayAligned>Display L (H2)</DisplayAligned>
								<Display variant="m" tag="p">
									And Display M
								</Display>
								<Text variant="large">
									<LoremIpsum words={33} />
								</Text>
							</Flex>
							<Flex direction="row" gap="l">
								<Button intent="positive" size="medium">
									Medium
								</Button>
								<Button intent="negative" variant="secondary" size="medium">
									Medium
								</Button>
							</Flex>
						</Flex>
						<IconButton size="medium" icon={SquareStackIcon} label="medium" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>
		</ResourcesPage>
	);
};
