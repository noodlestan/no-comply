import { Display, Flex, Grid, Icon, Link } from '@no-comply/standard-ui';
import SquareMousePointerIcon from 'lucide-solid/icons/square-mouse-pointer';
import { type Component } from 'solid-js';

import { Card } from '../../../../components';
import { routeFor } from '../../../../navigation';
import { PageContentsLayout } from '../../../../templates';

export const WelcomePage: Component = () => {
	return (
		<PageContentsLayout>
			<Flex gap="2xl">
				<Flex align="center" direction="row" gap="m">
					<Icon icon={SquareMousePointerIcon} size="large" aria-hidden />
					<Display level={1}>Standard UI</Display>
				</Flex>
				<Grid gap="m" columns={2}>
					<Card>
						<Link href={routeFor.showcase()}>Showcase</Link>
					</Card>
					<Card>
						<Link href={routeFor.feature('components')}>Components</Link>
					</Card>
					<Card>
						<Link href={routeFor.resources()}>Resources</Link>
					</Card>
					<Card>
						<Link href={routeFor.api()}>API</Link>
					</Card>
				</Grid>
			</Flex>
		</PageContentsLayout>
	);
};
