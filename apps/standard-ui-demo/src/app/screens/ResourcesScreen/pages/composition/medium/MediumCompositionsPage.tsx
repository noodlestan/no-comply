import { AlignFirstLine } from '@no-comply/solid-composables';
import { Button, Display, Flex, Icon, IconButton, Surface, Text } from '@no-comply/standard-ui';
import SquareStackIcon from 'lucide-solid/icons/square-stack';
import { type Component } from 'solid-js';

import { LoremIpsum } from '../../../../../content';
import { ResourcesPage } from '../../../private';

export const MediumCompositionsPage: Component = () => {
	return (
		<ResourcesPage title="Medium Compositions">
			<Display level={3}>Medium Heading</Display>

			<Surface variant="card" padding="l">
				<Flex direction="row" gap="l" align="start" justify="between">
					<AlignFirstLine>
						<Icon size="normal" icon={SquareStackIcon} alignFirstLine="measure" />
						<Flex direction="column" gap="l">
							<Flex direction="column" gap="m">
								<Display alignFirstLine="target" size="medium">
									Display Medium (H3)
								</Display>
								<Display size="small" tag="p">
									Display Small
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
						<IconButton size="normal" icon={SquareStackIcon} label="normal" alignFirstLine />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Small Heading</Display>

			<Surface variant="page">
				<Flex direction="row" gap="l" align="start" justify="between">
					<AlignFirstLine>
						<Flex direction="column" gap="l">
							<Flex direction="column" gap="m">
								<Display alignFirstLine="target" size="small">
									Display Small (h4)
								</Display>
								<Text size="medium" tag="p">
									Text Medium
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
						<IconButton
							size="normal"
							icon={SquareStackIcon}
							label="normal"
							alignFirstLine="measure"
						/>
					</AlignFirstLine>
				</Flex>
			</Surface>
		</ResourcesPage>
	);
};
