import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'
import _ from 'lodash'
import {
  ADD_SHARE,
  CLEAR_SHARES,
  ACTIVATE_SCANNER,
  DEACTIVATE_SCANNER,
} from './actions'

const initialSecretConfig = {
  name: "",
  phrase: "",
  shareCount: "2",
  threshold: "2",
}

const initialSharesState = [
]

const initialScannerState = {
  active: false,
}

function addShare(shares, shareToAdd) {
  var shareExists = _.some(shares, (share) => {
    return share.shareID === shareToAdd.shareID
  })
  if (!shareExists) {
    shares = [
      ...shares,
      shareToAdd
    ]
  }
  return _.sortBy(shares, share => {return share.shareID})
}

function shares(state = initialSharesState, action) {
  switch (action.type) {
    case ADD_SHARE:
      return addShare(state, {
          shareID: action.shareID,
          shareData: action.shareData
        })
    case CLEAR_SHARES:
      return []
    default:
      return state
  }
}

function scanner(state = initialScannerState, action) {
  switch (action.type) {
    case ACTIVATE_SCANNER:
      return {
        active: true
      }
    case DEACTIVATE_SCANNER:
      return {
        active: false
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  scanner: scanner,
  shares: shares,
  form: combineForms({
    secretConfig: initialSecretConfig,
  }, 'form')
})

export default reducers
