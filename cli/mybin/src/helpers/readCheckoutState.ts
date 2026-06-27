import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

import type { CheckoutState } from '../entities';

const GIT_CMD = (dir: string, cmd: string) =>
	execSync(`git ${cmd}`, { cwd: dir, encoding: 'utf8' }).trim();

export function readCheckoutState(dirPath: string): CheckoutState {
	if (!existsSync(dirPath)) {
		throw new Error(`Directory not found: ${dirPath}`);
	}

	try {
		const branch = GIT_CMD(dirPath, 'rev-parse --abbrev-ref HEAD');
		const lastCommit = GIT_CMD(dirPath, 'log --oneline -1');
		const isDirty = GIT_CMD(dirPath, 'status --porcelain').length > 0;

		let remote: string | null = null;
		try {
			remote = GIT_CMD(dirPath, 'remote get-url origin');
		} catch {
			// no remote configured
		}

		return { branch, remote, isDirty, lastCommit };
	} catch (error) {
		throw new Error(`Failed to read git info for '${dirPath}': ${(error as Error).message}`);
	}
}
