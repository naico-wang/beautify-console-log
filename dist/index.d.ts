declare const logger: {
    info: (textOrTitle: string | null, content?: string) => void;
    error: (textOrTitle: string | null, content?: string) => void;
    warning: (textOrTitle: string | null, content?: string) => void;
    success: (textOrTitle: string | null, content?: string) => void;
};
export default logger;
