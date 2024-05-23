declare type ExprPrimary = number | boolean;
declare enum ExprTokenType {
    QUESTION_MARK = 0,
    COLON = 1,
    MINUS = 2,
    PLUS = 3,
    SLASH = 4,
    STAR = 5,
    CARET = 6,
    LEFT_PAREN = 7,
    RIGHT_PAREN = 8,
    COMMA = 9,
    DOT = 10,
    PERCENT = 11,
    DOUBLE_PIPE = 12,
    DOUBLE_AMPERSAND = 13,
    BANG = 14,
    BANG_EQUAL = 15,
    DOUBLE_EQUAL = 16,
    GREATER = 17,
    GREATER_EQUAL = 18,
    LESS = 19,
    LESS_EQUAL = 20,
    NUMBER = 21,
    IDENTIFIER = 22,
    TRUE = 23,
    FALSE = 24,
    EOS = 25
}
interface IExprPosition {
    line: number;
    column: number;
}
declare class ExprToken implements IExprPosition {
    readonly type: ExprTokenType;
    readonly lexeme: string;
    readonly literal?: ExprPrimary;
    readonly line: number;
    readonly column: number;
    constructor(type: ExprTokenType, lexeme: string, literal: ExprPrimary | undefined, line: number, column: number);
    toString(): string;
}
declare class ExprError {
    readonly line: number;
    readonly column: number;
    readonly message: string;
    constructor(token: IExprPosition, message: string);
}
declare enum ExprPrimaryType {
    NumberBool = 0,
    Number = 1,
    Boolean = 2
}
declare type AnyFunction = (...args: any[]) => any;
interface IExprTranspiler<FunctionType extends AnyFunction> {
    /** Builds a function from an expression string */
    buildFunction(exprString: string | number, message: string): FunctionType;
    /** Builds a function from an expression string and returns the expression as well */
    buildFunctionExpr(exprString: string | number, message: string): {
        func: FunctionType;
        expr: Expr;
    };
}
interface ExprTestResult {
    isValid: boolean;
    isLiteral: boolean;
    errors: ExprError[];
}
declare type ExprTestFunction = (exprString: string | number, type: ExprPrimaryType) => ExprTestResult;
interface IExprTester {
    /** Validates that an expression is valid and evaluates to the given type */
    validateWithType(exprString: string | number, type: ExprPrimaryType): ExprTestResult;
}
declare const expressions: {
    updateModifiers: (modifiers: Modifier[]) => void;
    getCharacterNumberTranspiler: () => IExprTranspiler<(character: Character) => number>;
    getCombatEffectNumberTranspiler: (effect: CombatEffect) => IExprTranspiler<CombatEffectNumberFunc>;
    getInitialParamNumberTranspiler: (paramNames: string[]) => IExprTranspiler<(initialParams: Record<string, number>) => number>;
    getModifierValueTranspiler: () => IExprTranspiler<(value: number) => number>;
    getCharacterExprTester: () => ExprTestFunction;
    getCombatEffectExprTester: (namedProps: CombatEffectNamedProperties) => ExprTestFunction;
    getInitialParamExprTester: (namedProps: CombatEffectNamedProperties) => ExprTestFunction;
};
