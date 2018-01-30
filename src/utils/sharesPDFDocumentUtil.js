import invariant from 'invariant'
import _ from 'lodash'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const _createPDFPageDefinitions = function(shares, secretName, shareCount, threshold) {
  invariant(typeof shareCount !== 'undefined' && shareCount !== null, "Expecting valid shareCount!")
  invariant(typeof threshold !== 'undefined' && threshold !== null, "Expecting valid threshold!")
  invariant(typeof shares !== 'undefined' && shares, "Expecting valid shares!")

  var sortedShares = _.sortBy(shares, share => {return share.shareID})
  return _.map(sortedShares, ({ shareID, shareData, shareQRDataURL }) => {
    const secretNameHeader = secretName && secretName.length > 0 ? `${secretName.toUpperCase()}` : 'SECRET SHARE'
    const breakPageAfter = shareID !== shareCount
    return {
      stack: [
        {
          text: secretNameHeader,
          style: 'h1'
        },
        {
          text: `SHARE NUMBER ${shareID} OF ${shareCount}`,
          style: 'h2'
        },
        {
          text: `${threshold} SHARES ARE NECESSARY FOR RECOVERY`,
          style: 'h3'
        },
        {
          // if you specify both width and height - image will be stretched
          image: shareQRDataURL,
          height: 180,
          width: 180,
          alignment: 'center'
        },
        {
          text: `QR VALUE:`,
          style: 'h4'
        },
        {
          text: `${shareData.toUpperCase()}`,
          style: 'p'
        },
      ],
      pageBreak: breakPageAfter ? 'after': 'none',
    }
  })
}

export const createSharesPDF = function(shares, secretName, shareCount, threshold) {
  const pageDefinitions = _createPDFPageDefinitions(shares, secretName, shareCount, threshold)
  const docDefinition = {
    pageSize: 'A6',
    footer: {
      text: 'USE WWW.JJOTT.COM TO SCAN AND RECOVER YOUR SEED PHRASE',
      alignment: 'center',
      style: 'footer'
    },
    content: pageDefinitions,
    styles: {
      h1: {
        fontSize: 18,
        bold: true,
        marginBottom: 18,
        alignment: 'center'
      },
      h2: {
        fontSize: 12,
        marginBottom: 4,
        alignment: 'center'
      },
      h3: {
        fontSize: 8,
        marginBottom: 6,
        alignment: 'center',
        bold: false
      },
      h4: {
        marginTop: 6,
        fontSize: 8,
        alignment: 'center',
        bold: false
      },
      p: {
        marginTop: 6,
        fontSize: 8,
      },
      footer: {
        fontSize: 6,
        color: 'gray',
        alignment: 'center'
      }
    }
  };
  return pdfMake.createPdf(docDefinition)
}
