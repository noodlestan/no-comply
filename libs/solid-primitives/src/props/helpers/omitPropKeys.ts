export function omitPropKeys<
    AllKeys extends readonly string[],
    OmittedKeys extends readonly string[],
>(allKeys: AllKeys, omitted: OmittedKeys): Exclude<AllKeys[number], OmittedKeys[number]>[] {
    return allKeys.filter((key): key is Exclude<AllKeys[number], OmittedKeys[number]> => {
        return !omitted.includes(key);
    });
}
