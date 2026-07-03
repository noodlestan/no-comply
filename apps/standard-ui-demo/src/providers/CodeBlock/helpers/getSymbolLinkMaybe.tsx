import type { NoComplyEntityData } from '@no-comply/meta';
import type { CodeLayoutContextValue } from '@purrtrait/code-renderer';

import { routeFor } from '../../../app';

import { getSymbolEntityMaybe } from './getSymbolEntityMaybe';

export const getSymbolLinkMaybe = (
	ctx: CodeLayoutContextValue,
	token: string,
): string | undefined => {
	const entity = ctx.context as NoComplyEntityData;

	const localType = token in entity.symbols.declared;

	if (localType) {
		return `#${token}`;
	}

	const targetEntity = getSymbolEntityMaybe(entity, token) as NoComplyEntityData;

	if (!targetEntity) {
		return undefined;
	}

	return routeFor.entitySymbol(targetEntity, token);
};
