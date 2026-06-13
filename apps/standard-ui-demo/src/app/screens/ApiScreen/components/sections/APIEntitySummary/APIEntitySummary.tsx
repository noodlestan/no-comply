import { type NoComplyEntityData } from '@no-comply/meta';
import { Link, Text } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { CodeDocDescription } from '../../../../../components';
import { DocsItem, DocsSection } from '../../../../../content';
import { routeFor } from '../../../../../navigation';

type Props = {
	ent: NoComplyEntityData;
};

export const APIEntitySummary: Component<Props> = props => {
	return (
		<DocsSection title="Summary">
			<DocsItem gap="m">
				<CodeDocDescription node={props.ent} />
				<Text>
					See also <Link href={routeFor.component(props.ent.name)}>Component Preview</Link>
				</Text>
			</DocsItem>
		</DocsSection>
	);
};
