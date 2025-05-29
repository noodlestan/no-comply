export type PickRequired<T, K extends keyof T> = {
    [P in K]-?: T[P];
};

// export type PickWithRequired<T, K extends keyof T, R extends keyof T> = Pick<
//     T,
//     Exclude<keyof T, R>
// > &
//     Required<Pick<T, R>> &
//     Pick<T, K>;
