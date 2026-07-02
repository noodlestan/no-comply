import { ActionLabel, Display, Flex, Label, Mono, Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { ResourcesPage } from '../../../private';

export const TypographyVariantsPage: Component = () => {
	return (
		<ResourcesPage title="Variants">
			<Display level={3}>Display</Display>

			<Flex direction="column" gap="l">
				<Display variant="huge">Display Variant Huge</Display>
				<Display size="large">Display Variant XL (Level 1)</Display>
				<Display size="medium">Display Variant L (Level 2)</Display>
				<Display size="normal">Display Variant M (Level 3)</Display>
				<Display size="small">Display Variant S (Level 4)</Display>
				<Display variant="tiny">Display Variant XS (Level 5)</Display>
			</Flex>

			<Display level={3}>Text</Display>

			<Flex direction="column" gap="l">
				<Text size="large">Lorem ipsum dolor sit amet.</Text>
				<Text size="medium">Lorem ipsum dolor sit amet.</Text>
				<Text size="normal">Lorem ipsum dolor sit amet.</Text>
				<Text size="small">Lorem ipsum dolor sit amet.</Text>
			</Flex>

			<Display level={3}>Label</Display>

			<Flex direction="column" gap="l">
				<Label size="large">Lorem ipsum dolor sit amet.</Label>
				<Label size="medium">Lorem ipsum dolor sit amet.</Label>
				<Label size="normal">Lorem ipsum dolor sit amet.</Label>
				<Label size="small">Lorem ipsum dolor sit amet.</Label>
			</Flex>

			<Display level={3}>Action</Display>

			<Flex direction="column" gap="l">
				<ActionLabel size="large">Lorem ipsum dolor sit amet.</ActionLabel>
				<ActionLabel size="medium">Lorem ipsum dolor sit amet.</ActionLabel>
				<ActionLabel size="normal">Lorem ipsum dolor sit amet.</ActionLabel>
				<ActionLabel size="small">Lorem ipsum dolor sit amet.</ActionLabel>
			</Flex>

			<Display level={3}>Mono</Display>

			<Flex direction="column" gap="l">
				<Mono size="large">Lorem ipsum dolor sit amet.</Mono>
				<Mono size="medium">Lorem ipsum dolor sit amet.</Mono>
				<Mono size="normal">Lorem ipsum dolor sit amet.</Mono>
				<Mono size="small">Lorem ipsum dolor sit amet.</Mono>
			</Flex>
		</ResourcesPage>
	);
};
