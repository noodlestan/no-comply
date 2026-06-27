import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { ProjectEntityDetails } from '../entities';

export function readProjectPackageFile(
	dirPath: string,
): ProjectEntityDetails & { packageName: string } {
	const pkgPath = join(dirPath, 'package.json');

	if (!existsSync(pkgPath)) {
		throw new Error(`package.json not found in '${dirPath}'`);
	}

	const raw = readFileSync(pkgPath, 'utf8');
	const pkg = JSON.parse(raw);

	const workspaces = pkg.workspaces ?? [];
	const isWorkspace = workspaces.length > 0;

	return {
		packageName: pkg.name ?? '',
		isWorkspace,
		workspaces,
	};
}

export const resolveProjectMeta = readProjectPackageFile;
