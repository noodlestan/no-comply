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

export const MediumCompositionsPage: Component = () => {
	return (
		<ResourcesPage title="Medium Compositions">
			<Display level={3}>Medium Heading</Display>

			<Surface variant="card" padding="l">
				<Flex direction="row" gap="m" align="start" justify="between">
					<AlignFirstLine height="s" type="display" variant="m">
						<Icon size="normal" icon={SquareStackIcon} aligned />
						<Flex gap="l">
							<Flex gap="m">
								<DisplayAligned>Display M (Level 3)</DisplayAligned>
								<Display variant="xs" tag="p">
									And Display XS
								</Display>
								<Text>
									<LoremIpsum words={33} />
								</Text>
							</Flex>
							<Flex direction="row" gap="m">
								<Button intent="positive" size="normal">
									Normal
								</Button>
								<Button intent="negative" variant="secondary" size="normal">
									Normal
								</Button>
							</Flex>
						</Flex>
						<IconButton size="normal" icon={SquareStackIcon} label="normal" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Small Heading</Display>

			<Surface variant="page">
				<Flex direction="row" align="start" justify="between">
					<AlignFirstLine height="s" type="display" variant="s">
						<Flex gap="l">
							<Flex gap="m">
								<DisplayAligned>Display S (Level 4)</DisplayAligned>
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
						<IconButton size="normal" icon={SquareStackIcon} label="normal" aligned />
					</AlignFirstLine>
				</Flex>
			</Surface>
		</ResourcesPage>
	);
};
