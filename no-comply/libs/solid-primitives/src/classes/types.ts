/**
 * @noresolve
 */
export type ClassList = Record<string, boolean>;

export type ClassListInput = string | (string | ClassList)[] | ClassList;
