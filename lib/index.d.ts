declare function info(textOrTitle: string | null, content?: string): void;
declare function error(textOrTitle: string | null, content?: string): void;
declare function warning(textOrTitle: string | null, content?: string): void;
declare function success(textOrTitle: string | null, content?: string): void;
declare const _default: {
    info: typeof info;
    error: typeof error;
    warning: typeof warning;
    success: typeof success;
};
export default _default;
