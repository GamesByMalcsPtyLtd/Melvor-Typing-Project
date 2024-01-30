/**
 * Helpful function wrappers for common functionalities
 */
declare const useMitt: <T extends Record<import("mitt").EventType, unknown>>() => {
    readonly all: () => import("mitt").EventHandlerMap<T>;
    emit: {
        <Key extends keyof T>(type: Key, event: T[Key]): void;
        <Key_1 extends keyof T>(type: undefined extends T[Key_1] ? Key_1 : never): void;
    };
    on: <K extends keyof T>(key: K, handler: (value: T[K]) => void) => () => void;
    cleanup: () => void;
};
declare const useEvents: (...events: (() => void)[]) => () => void;
