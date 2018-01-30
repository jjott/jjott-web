import React from 'react';
import {ListItem} from 'material-ui/List';

const ShareListItem = ({shareID, shareData}) => (
    <ListItem primaryText={`Secret Share ${shareID}`} secondaryText={shareData} />
);

export default ShareListItem;
