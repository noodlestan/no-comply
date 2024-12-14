export type DecisionTypeMeta = {
    category: string;
    domain: string;
    type: string;
    name: string;
    description: string;
    factory: () => void;
    models: DecisionModelMeta[];
};

export type DecisionModelMeta = {
    model: string;
    name: string;
    description: string;
};
