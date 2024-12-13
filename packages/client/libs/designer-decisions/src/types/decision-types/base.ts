export type DecisionInput = {
    type: string;
    name: string;
    context?: string[];
    params: Record<string, unknown>;
};
