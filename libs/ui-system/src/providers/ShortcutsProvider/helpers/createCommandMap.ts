import { UIControllerCommandMeta } from '../../../controllers';

type UIControllerCommandMetaTyped<T extends string> = UIControllerCommandMeta & {
    name: T;
};

export const createCommandMap = <T extends string>(
    commands: UIControllerCommandMetaTyped<T>[],
): Record<T, UIControllerCommandMeta> => {
    return commands.reduce(
        (acc, item) => {
            acc[item.name as T] = item;
            return acc;
        },
        {} as Record<T, UIControllerCommandMeta>,
    );
};
