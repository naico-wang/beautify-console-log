declare const colorfulConsole: {
    info: (textOrTitle: string | null, content?: any) => void;
    error: (textOrTitle: string | null, content?: any) => void;
    warning: (textOrTitle: string | null, content?: any) => void;
    success: (textOrTitle: string | null, content?: any) => void;
};
export default colorfulConsole;
