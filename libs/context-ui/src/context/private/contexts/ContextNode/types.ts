import type { Accessor } from 'solid-js';

import type { BaseContext, ContextId } from '../../types';

export type ContextNodeOptions = {
    id?: ContextId;
};

export type ContextNode = {
    id: string;
    value: BaseContext | undefined;
    parent: ContextNode | undefined;
    children: Accessor<ContextNode[]>;
};

export type ContextNodeOwnerAPI = {
    addChild: (child: ContextNode) => void;
    removeChild: (child: ContextNode) => void;
};

export type ContextNodeValue = [ContextNode, ContextNodeOwnerAPI];
