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
	TextAligned,
} from '@no-comply/standard-ui';
import SquareStackIcon from 'lucide-solid/icons/square-stack';
import { type Component } from 'solid-js';

import { LoremIpsum } from '../../../../../content';
import { ResourcesPage } from '../../../private';

export const SmallCompositionsPage: Component = () => {
	return (
		<ResourcesPage title="Small Compositions">
			<Display level={3}>Display XS</Display>

			<Surface variant="card" padding="m">
				<Flex direction="row" gap="m" align="start" justify="between">
					<AlignFirstLine height="2xs" type="display" variant="xs">
						<Icon size="small" icon={SquareStackIcon} aligned />
						<Flex gap="l">
							<Flex gap="m">
								<DisplayAligned>Display XS (Level 5)</DisplayAligned>
								<Text variant="medium" tag="p">
									And Text Medium
								</Text>
								<Text>
									<LoremIpsum words={33} />
								</Text>
							</Flex>
							<Flex direction="row" gap="s">
								<Button intent="positive" size="normal">
									Normal
								</Button>
								<Button intent="negative" variant="secondary" size="normal">
									Normal
								</Button>
							</Flex>
						</Flex>
						<IconButton size="small" icon={SquareStackIcon} label="small" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Large Text</Display>

			<Surface variant="panel" padding="s">
				<Flex direction="row" gap="s" align="start" justify="between">
					<AlignFirstLine height="s" type="text" variant="large">
						<Icon size="small" icon={SquareStackIcon} aligned />
						<Flex gap="m">
							<Flex gap="s">
								<TextAligned>Text Large</TextAligned>
								<Text variant="medium" tag="p">
									And Text Medium
								</Text>
								<Text>
									<LoremIpsum words={33} />
								</Text>
							</Flex>
							<Flex direction="row" gap="s">
								<Button intent="positive" size="normal">
									Normal
								</Button>
								<Button intent="negative" variant="secondary" size="normal">
									Normal
								</Button>
							</Flex>
						</Flex>
						<IconButton size="small" icon={SquareStackIcon} label="medium" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Normal Text</Display>

			<Surface variant="card" padding="s">
				<Flex direction="row" align="start" justify="between">
					<AlignFirstLine height="xs" type="text" variant="normal">
						<Flex direction="row" gap="s" align="start">
							<Icon size="small" icon={SquareStackIcon} aligned />
							<Flex gap="m">
								<Flex gap="s">
									<TextAligned>Text Normal</TextAligned>
									<Text variant="small">
										<LoremIpsum words={33} />
									</Text>
								</Flex>
								<Flex direction="row" gap="s">
									<Button intent="positive" size="small">
										Small
									</Button>
									<Button intent="negative" variant="secondary" size="small">
										Small
									</Button>
								</Flex>
							</Flex>
						</Flex>
						<IconButton size="small" icon={SquareStackIcon} label="small" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>
		</ResourcesPage>
	);
};
