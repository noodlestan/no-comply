export const generateTreeNodeUniqueId = (
    parentId: string | undefined,
    selfId: string | (() => string),
): string => {
    const id = typeof selfId === 'function' ? selfId() : selfId;
    return parentId ? `${parentId}-${id}` : id;
};
