import * as fs from 'fs';
import * as path from 'path';

export function findTypeFiles(paths: string[]): string[] {
    function getAllTsFiles(dirPath: string): string[] {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        return entries.flatMap(entry => {
            const fullPath = path.resolve(dirPath, entry.name);
            if (entry.isDirectory()) {
                return getAllTsFiles(fullPath);
            } else if (
                entry.isFile() &&
                fullPath.endsWith('.ts') &&
                !/index\.ts$/.test(fullPath) &&
                !/base\.ts$/.test(fullPath)
            ) {
                return fullPath;
            } else {
                return [];
            }
        });
    }

    return paths.flatMap(getAllTsFiles);
}
