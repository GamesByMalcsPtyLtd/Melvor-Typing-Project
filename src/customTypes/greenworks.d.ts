/*  Melvor Typing Project v1.9.0: Fetches and Documents Melvor Idle

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
declare global {
  interface Window {
    greenworks: Greenworks;
  }
}

declare interface Greenworks {
  /** Returns a True when Steam APIs were successfully initialized, otherwise throw an error. */
  init: () => boolean;
  /** Returns a Boolean whether Steam APIs were successfully initialized or not. */
  initAPI: () => boolean;
  /** The achievement represents the unlocked achievement in your game. */
  activateAchievement: (achievement: string, success_callback: VoidFunction, error_callback?: ErrorCallback) => void;
  /** Gets whether the achievement is achieved. */
  getAchievement: (achievement: string, success_callback: (is_achieved: boolean) => void, error_callback?: ErrorCallback) => void;
  /** Returns an Array represents all the achievements in the game. */
  getAchievementNames: () => string[];
  /** Clears the achievemen */
  clearAchievement: (achievement: string, success_callback: VoidFunction, error_callback?: ErrorCallback) => void;
  setRichPresence(pchKey: string, pchValue: string) : boolean;
  /** Clears all of the current user's Rich Presence key/values. */
  ClearRichPresence() : void;
}

type ErrorCallback = (error: string) => void;

export { }