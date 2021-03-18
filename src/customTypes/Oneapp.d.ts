/*  Melvor Typing Project v1.4.0: Fetches and Documents Melvor Idle

    Copyright (C) <2021>  <Coolrox95>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/// <reference types = "jquery"/>
export as namespace One;
export = One;

type HelperName = 'core-bootstrap-tooltip' | 'core-bootstrap-popover' | 'core-bootstrap-tabs' | 'core-bootstrap-custom-file-input'
  | 'core-toggle-class' | 'core-scroll-to' | 'core-year-copy' | 'core-appear' | 'core-ripple' | 'print' | 'table-tools-sections'
  | 'table-tools-checkable' | 'magnific-popup' | 'summernote' | 'ckeditor' | 'ckeditor5' | 'simplemde' | 'slick' | 'datepicker'
  | 'colorpicker' | 'masked-inputs' | 'select2' | 'highlightjs' | 'notify' | 'easy-pie-chart' | 'maxlength' | 'rangeslider' | 'sparkline' | 'validation' | 'flatpickr';
type InitNames = 'init' | 'sidebar_pos_toggle' | 'sidebar_pos_left' | 'sidebar_pos_right' | 'sidebar_toggle' | 'sidebar_open' | 'sidebar_close' | 'sidebar_mini_toggle'
 | 'sidebar_mini_on' | 'sidebar_mini_off' | 'sidebar_style_toggle' | 'sidebar_style_dark' | 'sidebar_style_light' | 'side_overlay_toggle' | 'side_overlay_open' 
 | 'side_overlay_close' | 'side_overlay_mode_hover_toggle' | 'side_overlay_mode_hover_on' | 'side_overlay_mode_hover_off' | 'header_mode_toggle' | 'header_mode_static' 
 | 'header_mode_fixed' | 'header_style_toggle' | 'header_style_dark' | 'header_style_light' | 'header_search_on' | 'header_search_off' | 'header_loader_on' 
 | 'header_loader_off' | 'side_scroll_toggle' | 'side_scroll_native' | 'side_scroll_custom' | 'content_layout_toggle' | 'content_layout_boxed' | 'content_layout_narrow' | 'content_layout_full_width';
type BlockNames = 'init' | 'fullscreen_toggle' | 'fullscreen_on' | 'fullscreen_off' | 'content_toggle' | 'content_hide' | 'content_show' | 'state_toggle' | 'state_loading' | 'state_normal' | 'pinned_toggle' | 'pinned_on' | 'pinned_off' | 'close' | 'open';
type LoaderNames = 'show' | 'hide';
  /** Class containing accessible functions */
declare class HelperPublic {
  constructor();
  /** Runs the helper(s) with the argument helperArg */
  run(helpers: (HelperName[] | HelperName), helperArg?: any): void;
  coreBootstrapTooltip(): void;
  coreBootstrapPopover(): void;
  coreBootstrapTabs(): void;
  coreBootstrapCustomFileInput(): void;
  coreToggleClass(): void;
  coreScrollTo(): void;
  coreYearCopy(): void;
  coreAppear(): void;
  coreRipple(): void;
  print(): void;
  tableToolsSections(): void;
  tableToolsCheckable(): void;
  /** This one is not exposed as a helper function */
  tableToolscheckRow(a: JQuery<HTMLElement>, b: boolean): void;
  magnific(): void;
  summernote(): void;
  ckeditor(): void;
  ckeditor5(): void;
  simpleMDE(): void;
  slick(): void;
  datepicker(): void;
  colorpicker(): void;
  maskedInputs(): void;
  select2(): void;
  highlightjs(): void;
  /** Opt arg seems to be some options param*/
  notify(options?: any): void;
  easyPieChart(): void;
  maxlength(): void;
  rangeslider(): void;
  sparkline(): void;
  validation(): void;
  /** No idea what types this needs might not even return void */
  flatpickr(e): void;
}
/** Class containing internal helper functions */
declare class HelperPrivate {
  constructor();
  updateTheme(a: JQuery<HTMLElement>, b: string): void;
  getWidth(): number;
}

/** Base class for oneui */
declare class OneBase {
  constructor();
  private _uiInit(): void;
  private _uiHandleSidebars(e): void;
  private _uiHandleNav(): void;
  private _uiHandlePageLoader(a?: LoaderNames): void;
  private _uiHandleTheme(): void;
  public _uiApiLayout(e?: InitNames): void;
  private _uiApiBlocks(a?: BlockNames, b?:(JQuery<HTMLElement>|string|HTMLElement|HTMLElement[])): void;
  init(): void;
  layout(init: InitNames): void;
  block(block: BlockNames, elements: (JQuery<HTMLElement>|string|HTMLElement|HTMLElement[])): void;
  loader(state: LoaderNames, unused: any): void;
  helpers(helpers: (HelperName | HelperName[]), helperArg?: any): void;
  private _lHtml: JQuery<HTMLElement>;
  private _lBody: JQuery<HTMLElement>;
  private _lpageLoader: JQuery<HTMLElement>;
  private _lPage: JQuery<HTMLElement>;
  private _lSidebar: JQuery<HTMLElement>;
  private _lSidebarScrollCon: JQuery<HTMLElement>;
  private _lSideOverlay: JQuery<HTMLElement>;
  private _lHeader: JQuery<HTMLElement>;
  private _lHeaderSearch: JQuery<HTMLElement>;
  private _lHeaderSearchInpu: JQuery<HTMLElement>;
  private _lHeaderLoader: JQuery<HTMLElement>;
  private _lMain: JQuery<HTMLElement>;
  private _lFooter: JQuery<HTMLElement>;
  private _lSidebarScroll: boolean;
  private _lSideOverlayScroll: boolean;
  private _windowW: number;
}

/** Constructor class for One */
declare class Oneapp extends OneBase {
  constructor();
}

declare const One: Oneapp;