declare type ComponentProps = {
    $template: string;
    [key: string]: unknown;
};
declare const ui: {
    create: (props: ComponentProps, host: Element) => Element;
    createStatic: (template: string, host: Element) => Element;
    createStore: <T extends Record<string, unknown>>(props: T) => T;
};
