/*
 * action types
 */

export const CLEAR_SHARES = 'CLEAR_SHARES'
export const ADD_SHARE = 'ADD_SHARE'
export const DEACTIVATE_SCANNER = 'DEACTIVATE_SCANNER'
export const ACTIVATE_SCANNER = 'ACTIVATE_SCANNER'

/*
 * action creators
 */

export function clearShares() {
  return { type: CLEAR_SHARES }
}

export function addShare(shareID, shareData) {
  return { type: ADD_SHARE, shareID, shareData }
}

export function activateScanner() {
  return { type: ACTIVATE_SCANNER }
}

export function deactivateScanner() {
  return { type: DEACTIVATE_SCANNER }
}
