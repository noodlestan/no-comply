import type { NoComplyEntityData } from '@no-comply/meta';

import { routeFor } from '../../../../app';
import { useMeta } from '../../../Meta';

export const getSymbolLinkMaybe = (context: object, token: string): string | undefined => {
	const { resolveSymbolEntity } = useMeta();

	const entity = context as NoComplyEntityData;

	const localType = token in entity.symbols.declared;

	if (localType) {
		return `#${token}`;
	}

	const targetEntity = resolveSymbolEntity(entity, token) as NoComplyEntityData;

	if (!targetEntity) {
		return undefined;
	}

	return routeFor.entitySymbol(targetEntity, token);
};
