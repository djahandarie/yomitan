/*
* Copyright (C) 2023  Yomitan Authors
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export type RunAt = 'document_start' | 'document_end' | 'document_idle';

/** The script registration details. */
export type RegistrationDetails = {
    /** Same as `matches` in the `content_scripts` manifest key. */
    matches: string[];

    /** Regex match pattern to use as a fallback when native content script registration isn't supported. */
    /** Should be equivalent to `matches`. */
    urlMatches: string;

    /** Same as `run_at` in the `content_scripts` manifest key. */
    runAt: RunAt;

    /** Same as `exclude_matches` in the `content_scripts` manifest key. */
    excludeMatches?: string[];

    /** Same as `match_about_blank` in the `content_scripts` manifest key. */
    matchAboutBlank: boolean;

    /** Same as `all_frames` in the `content_scripts` manifest key. */
    allFrames: boolean;

    /** List of CSS paths. */
    css?: string[];

    /** List of script paths. */
    js?: string[];
};

export type ContentScriptInjectionDetails = {
    allFrames: boolean;
    matchAboutBlank: boolean;
    runAt: RunAt;
    css?: string[];
    js?: string[];
    urlRegex: RegExp | null;
};
