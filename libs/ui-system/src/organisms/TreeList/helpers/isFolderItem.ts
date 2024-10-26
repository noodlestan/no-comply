import { TreeItem } from '../types';

export const isFolderItem = (item: TreeItem): boolean => 'type' in item && item.type === 'folder';
