import {Tippy, HideAll, Delegate, CreateSingleton, roundArrow} from 'tippy.js';
export as namespace tippy
export = tippy;
interface TippyGlobal extends Tippy {
  hideAll: HideAll;
  delegate: Delegate;
  createSingleton: CreateSingleton;
  readonly roundArrow: typeof roundArrow;
}

declare const tippy: TippyGlobal;