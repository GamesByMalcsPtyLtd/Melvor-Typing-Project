declare abstract class Expr {
    abstract accept<T>(visitor: ExprVisitor<T>): T;
}
interface ExprVisitor<T> {
    visitTernaryExpr(expr: TernaryExpr): T;
    visitLogicalExpr(expr: LogicalExpr): T;
    visitBinaryExpr(expr: BinaryExpr): T;
    visitUnaryExpr(expr: UnaryExpr): T;
    visitLiteralExpr(expr: LiteralExpr): T;
    visitBuiltInExpr(expr: BuiltInExpr): T;
    visitReferenceExpr(expr: ReferenceExpr): T;
    visitGroupingExpr(expr: GroupingExpr): T;
}
declare class TernaryExpr extends Expr {
    readonly condition: Expr;
    readonly operator: ExprToken;
    readonly left: Expr;
    readonly right: Expr;
    constructor(condition: Expr, operator: ExprToken, left: Expr, right: Expr);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class LogicalExpr extends Expr {
    readonly left: Expr;
    readonly operator: ExprToken;
    readonly right: Expr;
    constructor(left: Expr, operator: ExprToken, right: Expr);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class BinaryExpr extends Expr {
    readonly left: Expr;
    readonly operator: ExprToken;
    readonly right: Expr;
    constructor(left: Expr, operator: ExprToken, right: Expr);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class UnaryExpr extends Expr {
    readonly operator: ExprToken;
    readonly right: Expr;
    constructor(operator: ExprToken, right: Expr);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class LiteralExpr extends Expr {
    readonly value: number | boolean;
    constructor(value: number | boolean);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class BuiltInExpr extends Expr {
    readonly name: ExprToken;
    readonly paren: ExprToken;
    readonly callArgs: Expr[];
    constructor(name: ExprToken, paren: ExprToken, callArgs: Expr[]);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class ReferenceExpr extends Expr {
    readonly names: ExprToken[];
    constructor(names: ExprToken[]);
    accept<T>(visitor: ExprVisitor<T>): T;
}
declare class GroupingExpr extends Expr {
    readonly expression: Expr;
    constructor(expression: Expr);
    accept<T>(visitor: ExprVisitor<T>): T;
}
