/*  Melvor Typing Project v1.8.0: Fetches and Documents Melvor Idle

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
// Jquery Static extension to force types of .val calls
type ValFcnForInput = (() => string) & ((value: string) => void);
interface JQueryStatic {
  (selector: '#username-set-main') : JQueryInputElement
  (selector: '#username-set') : JQueryInputElement
  (selector: '#searchTextbox') : JQueryInputElement
  (selector: '#dropdown-content-custom-amount') : JQueryInputElement
  (selector: '#dropdown-content-custom-amount-1'): JQueryInputElement
  (selector: '#import-save-character-selection'): JQueryInputElement
}
interface JQueryInputElement extends Omit<JQuery<HTMLElement>, 'val'> {
  val: ValFcnForInput
}

// Document extension to force types
interface Document {
  getElementById(elementID: 'username-change'): HTMLInputElement
  getElementById(elementID: 'game-broke-error-msg'): HTMLTextAreaElement
  getElementById(elementID: 'exportSaveField'): HTMLTextAreaElement;
  getElementById(elementID: 'exportSaveField2'): HTMLTextAreaElement;
  getElementById(elementID: 'exportSaveFieldUpdate'): HTMLTextAreaElement;
  getElementById(elementID: 'exportSaveFieldUpdate2'): HTMLTextAreaElement;
  getElementById(elementID: 'importSaveField'): HTMLTextAreaElement;
}

interface ObjectConstructor {
  keys(obj: Partial<StandardModifierObject<number>>): StandardModifierKeys[]
  keys(obj: ModifierData) : ModifierKeys[]
  keys(obj: ModifierActive) : ModifierKeys[]
  keys(obj: Shop) : ShopCategory[]
  keys(obj: EnemyModifierData): EnemyModiferKey[]
  entries(obj: ModifierActive) : ModifierActiveEntry[]
  entries(obj: ModifierData) : ModifierDataEntry[]
}