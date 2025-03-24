import type { ContextValue, ContextValuesServiceAPI } from '../../types';

export function createContextValuesService(): ContextValuesServiceAPI {
    const store = new Map<string, ContextValue[]>(); // key: `type:name`, value: stacked array

    function getKey(type: string, name: string) {
        return `${type}:${name}`;
    }

    function getValue<T extends ContextValue>(type: string, name: string): T {
        const key = getKey(type, name);
        const stack = store.get(key);
        if (!stack || stack.length === 0) {
            throw new Error(`Unknown "${type}" context value: "${name}".`);
        }
        return stack[stack.length - 1] as T;
    }

    function resolveValue<T extends ContextValue>(type: string, name: string): T[] {
        const base = getValue<T>(type, name);
        return [base, ...base.extend.flatMap(ext => resolveValue<T>(type, ext))];
    }

    function register(values: ContextValue[]) {
        values.forEach(v => {
            const key = getKey(v.type, v.name);
            if (!store.has(key)) {
                store.set(key, []);
            }
            store.get(key)?.push(v);
        });
    }

    function unregister(values: ContextValue[]) {
        values.forEach(v => {
            const key = getKey(v.type, v.name);
            const stack = store.get(key);
            if (!stack) {
                return;
            }
            const index = stack.findIndex(item => item === v);
            if (index === -1) {
                return;
            }
            stack.splice(index, 1);
            if (stack.length === 0) {
                store.delete(key);
            }
        });
    }

    return {
        resolveValue,
        registerValues: values => register(values()),
        unregisterValues: values => unregister(values()),
    };
}
