interface ComponentProps extends Record<string, unknown> {
    $template: string;
}
declare const ui: {
    create: (props: ComponentProps, host: Element) => Element;
    createStatic: (template: string, host: Element) => Element;
    createStore: (props: Record<string, unknown>) => any;
};
