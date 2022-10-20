import mitt, { EventType as _EventType, Handler as _Handler, WildcardHandler as _WildcardHandler } from 'mitt';
export as namespace mitt;
export = mitt;
declare global {
  export {
    _EventType as EventType,
    _Handler as Handler,
    _WildcardHandler as WildcardHandler
  }
}
