import type { ComponentEntityData } from '@no-comply/meta';

import { useMeta } from '../../../../../../providers';
import { type DocsSectionData, createDocsSectionData } from '../../../../types';

import variant from './10-variant';
import intent from './20-intent';
import size from './30-size';
import disabled from './40-disabled';
import onPress from './50-on-press';

export default function (): DocsSectionData {
	// TODO inject entity
	const { getEntity: entity } = useMeta();
	const e = entity('@no-comply/standard-ui', 'component', 'Button') as ComponentEntityData;

	return createDocsSectionData({
		title: 'Props',
		// TODO e.props (store it when extracting)
		codeNode: e.types[2],
		items: [variant(), intent(), size(), disabled(), onPress()],
	});
}
