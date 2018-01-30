import React, { Component } from 'react'
import _ from 'lodash'

import { List } from 'material-ui/List'

import ShareListItem from './ShareListItem'

class ShareList extends Component {

  render() {
    var shareEntries = _.map(this.props.shares, ({ shareData, shareID }) => {
      return <ShareListItem key={shareID} shareID={shareID} shareData={shareData}/>
    })
    if (this.props.shares.length === 0) {
      return null
    }
    return (
      <List>
        {shareEntries}
      </List>
    );
  }
}

export default ShareList;
