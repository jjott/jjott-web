import _ from 'lodash'
import QRCode from 'qrcode'
import invariant from 'invariant'
import bip39 from 'bip39'
import shareableSeed from 'shareable-seed'

const _generateQRDataURL = async (text) => {
  try {
    const url = await QRCode.toDataURL(
      text,
      {
        color: {
          dark: '#000',
          light: '#0000'
        },
        errorCorrectionLevel: 'quartile',
        type: 'svg'
      })
    return url
  } catch (err) {
    console.error(err)
  }
}

const _splitShares = async function(phrase, shareCount, threshold) {
  invariant(typeof shareCount !== 'undefined' && shareCount !== null, "Expecting valid shareCount!")
  invariant(typeof threshold !== 'undefined' && threshold !== null, "Expecting valid threshold!")
  invariant(typeof phrase !== 'undefined' && phrase, "Expecting valid phrase!")
  invariant(bip39.validateMnemonic(phrase), "Expecting a valid BIP39 phrase!")
  const rawShares = shareableSeed.mnemonicToShares(phrase, shareCount, threshold, 'v1', 'english')
  const shares = []
  for(let id in rawShares) {
    let rawShare = rawShares[id];
    let qrDataURL = await _generateQRDataURL(rawShare)
    shares.push({
      shareID: parseInt(id, 10),
      shareData: rawShare,
      shareQRDataURL: qrDataURL
    })
  }
  return _.sortBy(shares, share => {return share.shareID})
}

export const createShares = async function(secretName, phrase, shareCount, threshold) {
  invariant(typeof shareCount !== 'undefined' && shareCount !== null, "Expecting valid shareCount!")
  invariant(typeof threshold !== 'undefined' && threshold !== null, "Expecting valid threshold!")
  invariant(typeof phrase !== 'undefined' && phrase, "Expecting valid phrase!")

  return await _splitShares(phrase, shareCount, threshold)
}
