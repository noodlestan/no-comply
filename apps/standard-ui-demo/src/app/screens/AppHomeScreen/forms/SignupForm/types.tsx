export type SignupData = {
    email: string;
    password: string;
};

export type SignupFormProps = {
    onCancel: () => void;
    onComplete: () => void;
};
