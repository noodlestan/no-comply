import { AlignFirstLine } from '@no-comply/solid-composables';
import { Button, Display, Flex, Icon, IconButton, Surface, Text } from '@no-comply/standard-ui';
import SquareStackIcon from 'lucide-solid/icons/square-stack';
import { type Component } from 'solid-js';

import { LoremIpsum } from '../../../../../content';
import { ResourcesPage } from '../../../private';

export const SmallCompositionsPage: Component = () => {
	return (
		<ResourcesPage title="Small Compositions">
			<Display level={3}>Display XS</Display>

			<Surface variant="card" padding="m">
				<Flex direction="row" gap="l" align="start" justify="between">
					<AlignFirstLine>
						<Icon size="small" icon={SquareStackIcon} alignFirstLine="measure" />
						<Flex direction="column" gap="l">
							<Flex direction="column" gap="m">
								<Display variant="tiny" alignFirstLine="target">
									Display Tiny (H5)
								</Display>
								<Text tag="p" size="medium">
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
						<IconButton size="small" icon={SquareStackIcon} label="small" />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Large Text</Display>

			<Surface variant="panel" padding="s">
				<Flex direction="row" gap="m" align="start" justify="between">
					<AlignFirstLine>
						<Icon size="small" icon={SquareStackIcon} alignFirstLine="measure" />
						<Flex direction="column" gap="m">
							<Flex direction="column" gap="s">
								<Text size="large" alignFirstLine="target">
									Text Large
								</Text>
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
						<IconButton size="small" icon={SquareStackIcon} label="medium" />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Normal Text</Display>

			<Surface variant="card" padding="s">
				<Flex direction="row" gap="s" align="start" justify="between">
					<AlignFirstLine>
						<Flex direction="row" gap="s" align="start">
							<Icon size="small" icon={SquareStackIcon} alignFirstLine="measure" />
							<Flex direction="column" gap="m">
								<Flex direction="column" gap="s">
									<Text size="normal" alignFirstLine="target">
										Text Normal
									</Text>
									<Text size="small">
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
						<IconButton size="small" icon={SquareStackIcon} label="small" />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>Small Text</Display>

			<Surface variant="card" padding="s">
				<Flex direction="row" gap="s" align="start" justify="start">
					<AlignFirstLine>
						<Icon size="small" icon={SquareStackIcon} alignFirstLine="measure" />
						<Text size="small" alignFirstLine="target">
							<LoremIpsum words={7} />
						</Text>
						<IconButton size="small" icon={SquareStackIcon} label="small" />
					</AlignFirstLine>
				</Flex>
			</Surface>
		</ResourcesPage>
	);
};
