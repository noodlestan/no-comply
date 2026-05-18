import type { NoComplyEntityData } from '@no-comply/meta-entities';
import type { CodeLayoutContextValue } from '@purrtrait/code-layout';

import { routeFor } from '../../../app';
import { useMeta } from '../../Meta';

export const getTokenLinkMaybe = (
	ctx: CodeLayoutContextValue,
	token: string,
): string | undefined => {
	const entity = ctx.context as NoComplyEntityData;

	const localType = token in entity.symbols.exported;

	if (localType) {
		return `#${token}`;
	}

	const importedSymbol = entity.symbols.imported[token];

	if (!importedSymbol) {
		console.warn(`Unresolved token "${token}" in entity "${entity.name}".`);
		return undefined;
	}

	const isLocalPackage = importedSymbol?.from.startsWith('./');

	const { getEntities } = useMeta();
	const allEntities = getEntities();
	const matches = allEntities.filter(candidate => {
		if (isLocalPackage && candidate.package !== entity.package) {
			return false;
		} else if (!isLocalPackage && candidate.package !== importedSymbol.from) {
			return false;
		}
		return importedSymbol.name in candidate.symbols.exported;
	});

	const targetEntity = matches[0];

	if (!targetEntity) {
		console.warn(`Multiple entities for "${token}" in entity "${entity.name}".`);
		return undefined;
	}

	return routeFor.entityToken(targetEntity, token);
};
