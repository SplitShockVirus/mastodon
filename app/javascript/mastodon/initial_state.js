<<<<<<< HEAD
=======
// @ts-check

/**
 * @typedef Emoji
 * @property {string} shortcode
 * @property {string} static_url
 * @property {string} url
 */

/**
 * @typedef AccountField
 * @property {string} name
 * @property {string} value
 * @property {string} verified_at
 */

/**
 * @typedef Account
 * @property {string} acct
 * @property {string} avatar
 * @property {string} avatar_static
 * @property {boolean} bot
 * @property {string} created_at
 * @property {boolean=} discoverable
 * @property {string} display_name
 * @property {Emoji[]} emojis
 * @property {AccountField[]} fields
 * @property {number} followers_count
 * @property {number} following_count
 * @property {boolean} group
 * @property {string} header
 * @property {string} header_static
 * @property {string} id
 * @property {string=} last_status_at
 * @property {boolean} locked
 * @property {string} note
 * @property {number} statuses_count
 * @property {string} url
 * @property {string} username
 */

/**
 * @typedef {[code: string, name: string, localName: string]} InitialStateLanguage
 */

/**
 * @typedef InitialStateMeta
 * @property {string} access_token
 * @property {boolean=} advanced_layout
 * @property {boolean} auto_play_gif
 * @property {boolean} activity_api_enabled
 * @property {string} admin
 * @property {boolean=} boost_modal
 * @property {boolean} crop_images
 * @property {boolean=} delete_modal
 * @property {boolean=} disable_swiping
 * @property {string=} disabled_account_id
 * @property {boolean} display_media
 * @property {string} domain
 * @property {boolean=} expand_spoilers
 * @property {boolean} limited_federation_mode
 * @property {string} locale
 * @property {string | null} mascot
 * @property {string=} me
 * @property {string=} moved_to_account_id
 * @property {string=} owner
 * @property {boolean} profile_directory
 * @property {boolean} registrations_open
 * @property {boolean} reduce_motion
 * @property {string} repository
 * @property {boolean} search_enabled
 * @property {boolean} single_user_mode
 * @property {string} source_url
 * @property {string} streaming_api_base_url
 * @property {boolean} timeline_preview
 * @property {string} title
 * @property {boolean} trends
 * @property {boolean} unfollow_modal
 * @property {boolean} use_blurhash
 * @property {boolean=} use_pending_items
 * @property {string} version
 * @property {boolean} translation_enabled
 */

/**
 * @typedef InitialState
 * @property {Record<string, Account>} accounts
 * @property {InitialStateLanguage[]} languages
 * @property {InitialStateMeta} meta
 */

>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a
const element = document.getElementById('initial-state');
const initialState = element && JSON.parse(element.textContent);

const getMeta = (prop) => initialState && initialState.meta && initialState.meta[prop];

<<<<<<< HEAD
export const domain = getMeta('domain');
=======
export const activityApiEnabled = getMeta('activity_api_enabled');
export const autoPlayGif = getMeta('auto_play_gif');
export const boostModal = getMeta('boost_modal');
export const cropImages = getMeta('crop_images');
export const deleteModal = getMeta('delete_modal');
export const disableSwiping = getMeta('disable_swiping');
export const disabledAccountId = getMeta('disabled_account_id');
export const displayMedia = getMeta('display_media');
export const domain = getMeta('domain');
export const expandSpoilers = getMeta('expand_spoilers');
export const forceSingleColumn = !getMeta('advanced_layout');
export const limitedFederationMode = getMeta('limited_federation_mode');
export const mascot = getMeta('mascot');
export const me = getMeta('me');
export const movedToAccountId = getMeta('moved_to_account_id');
export const owner = getMeta('owner');
export const profile_directory = getMeta('profile_directory');
>>>>>>> e0e7a09cfed2b311f055522eea45caac0838d87a
export const reduceMotion = getMeta('reduce_motion');
export const autoPlayGif = getMeta('auto_play_gif');
export const displayMedia = getMeta('display_media');
export const expandSpoilers = getMeta('expand_spoilers');
export const unfollowModal = getMeta('unfollow_modal');
export const boostModal = getMeta('boost_modal');
export const deleteModal = getMeta('delete_modal');
export const me = getMeta('me');
export const searchEnabled = getMeta('search_enabled');
export const maxChars = (initialState && initialState.max_toot_chars) || 500;
export const limitedFederationMode = getMeta('limited_federation_mode');
export const registrationsOpen = getMeta('registrations_open');
export const repository = getMeta('repository');
export const source_url = getMeta('source_url');
export const version = getMeta('version');
export const mascot = getMeta('mascot');
export const profile_directory = getMeta('profile_directory');
export const forceSingleColumn = !getMeta('advanced_layout');
export const useBlurhash = getMeta('use_blurhash');
export const usePendingItems = getMeta('use_pending_items');
export const showTrends = getMeta('trends');
export const title = getMeta('title');
export const cropImages = getMeta('crop_images');
export const disableSwiping = getMeta('disable_swiping');
export const languages = initialState && initialState.languages;

export default initialState;
