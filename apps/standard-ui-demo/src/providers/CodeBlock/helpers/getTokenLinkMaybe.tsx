import type { NoComplyEntityData } from '@no-comply/meta';
import type { CodeLayoutContextValue } from '@purrtrait/code-layout';

import { routeFor } from '../../../app';

import { getTokenEntityMaybe } from './getTokenEntityMaybe';

export const getTokenLinkMaybe = (
	ctx: CodeLayoutContextValue,
	token: string,
): string | undefined => {
	const entity = ctx.context as NoComplyEntityData;

	const localType = token in entity.symbols.exported;

	if (localType) {
		return `#${token}`;
	}

	const targetEntity = getTokenEntityMaybe(entity, token);

	if (!targetEntity) {
		return undefined;
	}

	return routeFor.entityToken(targetEntity, token);
};
