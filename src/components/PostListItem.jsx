import React, {useState} from 'react';
import styled from 'styled-components';
import { ListItem, Divider, ListItemText, ListItemAvatar, Avatar, IconButton, ListItemSecondaryAction, Tooltip} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import defaultThumbnail from '../assets/images/reddit.png';
import { getFormattedCreationDate } from '../utils';

const ReadTitle = styled.span`
  color: #9b9b9b;
`;

const PostListItem = ({
    data: {
        id,
        title,
        thumbnail,
        author,
        created_utc,
    }
  }) => {
  const creationDate = getFormattedCreationDate(created_utc);
  const readPost = false;
  return (

      <>
        <ListItem button onClick={() => null} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="thumbnail" src={thumbnail ? thumbnail : defaultThumbnail} />
          </ListItemAvatar>

          <ListItemText
            primary={
              (readPost ? <ReadTitle>{title}</ReadTitle> : title)
            }
            secondary={
              <>
                by <b>u/{author}</b> {creationDate}
              </>
            }
          />
          <ListItemSecondaryAction>
            <Tooltip title="Dismiss">
              <IconButton color="Secondary" edge="end" aria-label="delete">
                <Clear />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
  );
};

export default PostListItem;