export type DecisionInput = {
    id?: string;
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
