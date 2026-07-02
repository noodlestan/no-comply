import { AlignFirstLine } from '@no-comply/solid-composables';
import { Button, Display, Flex, Icon, IconButton, Surface, Text } from '@no-comply/standard-ui';
import SquareStackIcon from 'lucide-solid/icons/square-stack';
import { type Component } from 'solid-js';

import { LoremIpsum } from '../../../../../content';
import { ResourcesPage } from '../../../private';

export const LargeCompositionsPage: Component = () => {
	return (
		<ResourcesPage title="Large Compositions">
			<Display level={3}>Huge</Display>

			<Surface variant="page">
				<Flex direction="row" gap="2xl" align="start" justify="between">
					<AlignFirstLine>
						<Flex direction="column" gap="2xl">
							<Flex direction="column" gap="xl">
								<Display alignFirstLine="target" variant="huge">
									Display Huge
								</Display>
								<Display tag="p" size="large">
									Display Large
								</Display>
								<Text size="large">
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
						<IconButton
							size="medium"
							icon={SquareStackIcon}
							label="large"
							alignFirstLine="measure"
						/>
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>XL</Display>

			<Surface variant="stage" padding="l">
				<Flex direction="row" gap="xl" align="start" justify="between">
					<AlignFirstLine>
						<Icon size="large" icon={SquareStackIcon} alignFirstLine="measure" />
						<Flex direction="column" gap="2xl">
							<Flex direction="column" gap="xl">
								<Display alignFirstLine="target" size="large">
									Display Large
								</Display>
								<Display tag="p" size="medium">
									Display Medium
								</Display>
								<Text size="large">
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
						<IconButton size="medium" icon={SquareStackIcon} label="large" alignFirstLine />
					</AlignFirstLine>
				</Flex>
			</Surface>

			<Display level={3}>L</Display>

			<Surface variant="card" padding="l">
				<Flex direction="row" gap="xl" align="start" justify="between">
					<AlignFirstLine>
						<Icon size="large" icon={SquareStackIcon} alignFirstLine="measure" />
						<Flex direction="column" gap="2xl">
							<Flex direction="column" gap="l">
								<Display alignFirstLine="target" size="medium">
									Display Medium (H2)
								</Display>
								<Display size="small" tag="p">
									Display Small
								</Display>
								<Text size="large">
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
						<IconButton size="medium" icon={SquareStackIcon} label="medium" alignFirstLine />
					</AlignFirstLine>
				</Flex>
			</Surface>
		</ResourcesPage>
	);
};
