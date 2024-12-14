export type DecisionInput = {
    type: string;
    name: string;
    description?: string;
    contexts?: string[];
    usage?: {
        intendedFor?: string[];
        notFor?: string[];
    };
    params: Record<string, unknown>;
};
