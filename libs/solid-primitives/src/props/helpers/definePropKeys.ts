// export function definePropKeys<T>() {
// 	return <K extends readonly (keyof T)[]>(
// 		keys: [...K] &
// 			(Exclude<keyof T, K[number]> extends never
// 				? K[number] extends keyof T
// 				? unknown
// 				: 'Extra keys'
// 				: 'Missing keys'),
// 	): K => keys;
// }

export function definePropKeys<T>() {
	return <K extends readonly (keyof T)[]>(
		keys: K &
			(Exclude<keyof T, K[number]> extends never
				? K[number] extends keyof T
					? unknown
					: 'Extra keys'
				: 'Missing keys'),
	): K => {
		if (new Set(keys).size !== keys.length) {
			throw new Error(`Duplicate prop keys: ${JSON.stringify(keys)}`);
		}

		return keys;
	};
}
