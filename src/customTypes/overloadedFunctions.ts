/*  Melvor Typing Project v1.3.0: Fetches and Documents Melvor Idle

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
// Type definitions for game functions that get overloaded, 
// these need to be subbed into the typedef file after compilation
// There is no support for function overloads in jsdoc so this is all we get... probably
interface FindEnemyAreaFcn {
  (enemy: MonsterID, name: true) : string
  (enemy: MonsterID, name: false) : [number,number]
}

const enum SettingID {
  IgnoreBankFull = 1,
  DefaultPageOnLoad = 2,
  LevelUpScreen = 3,
  ContinueThievingOnStun = 4,
  ShowItemNotify = 5,
  AutoRestartDungeon = 6,
  AutoSaveCloud = 7,
  DarkMode = 8,
  ShowGPNotify = 9,
  ShowEnemySkillLevels = 12,
  ConfirmationOnClose = 13,
  EnableAccessibility = 14,
  AutoPotion = 15,
  AutoUseSpecialAttack = 16,
  ShowHPNotify = 17,
  AutoSlayerTask = 18,
  ShowCommas = 19,
  ShowVirtualLevels = 20,
  FormatNumberSetting = 21,
  PauseOfflineActions = 22,
  ShowSaleNotifications = 23,
  ShowShopNotifications = 24,
  ShowCombatMinibar = 25,
  ShowCombatMinibarCombat = 26,
  UseCombinationRunes = 27,
  ShowSkillMinibar = 28,
  DisableAds = 29,
  CurrentEquipDefault = 30,
  HideMaxLevel = 31,
  AutoSlayer = 32,
  ConfirmationCheckpoint = 33
}
type NumBool = 0|1;
interface ChangeSettingsFcn {
  (s: SettingID.IgnoreBankFull, t: boolean, i?: boolean) : void;
  (s: SettingID.DefaultPageOnLoad, t: PageID, i?: boolean) : void;
  (s: SettingID.LevelUpScreen, t: NumBool, i?: boolean) : void;
  (s: SettingID.ContinueThievingOnStun, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowItemNotify, t: NumBool, i?: boolean) : void;
  (s: SettingID.AutoRestartDungeon, t: boolean, i?: boolean) : void;
  (s: SettingID.AutoSaveCloud, t: boolean, i?: boolean) : void;
  (s: SettingID.DarkMode, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowGPNotify, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowEnemySkillLevels, t: boolean, i?: boolean) : void;
  (s: SettingID.ConfirmationOnClose, t: boolean, i?: boolean) : void;
  (s: SettingID.EnableAccessibility, t: boolean, i?: boolean) : void;
  (s: SettingID.AutoPotion, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowHPNotify, t: boolean, i?: boolean) : void;
  (s: SettingID.AutoSlayerTask, t: true, i?: boolean) : void;
  (s: SettingID.ShowCommas, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowVirtualLevels, t: boolean, i?: boolean) : void;
  (s: SettingID.FormatNumberSetting, t: NumBool, i?: boolean) : void;
  (s: SettingID.PauseOfflineActions, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowSaleNotifications, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowShopNotifications, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowCombatMinibar, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowCombatMinibarCombat, t: boolean, i?: boolean) : void;
  (s: SettingID.ShowSkillMinibar, t: boolean, i?: boolean) : void;
  (s: SettingID.DisableAds, t: boolean, i?: boolean) : void;
  (s: SettingID.CurrentEquipDefault, t: boolean, i?: boolean) : void;
  (s: SettingID.HideMaxLevel, t: boolean, i?: boolean) : void;
  (s: SettingID.ConfirmationCheckpoint, t: boolean, i?: boolean) : void;
}