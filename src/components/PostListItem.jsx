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
        subreddit_name_prefixed,
        permalink,
        post_hint,
        thumbnail,
        author,
        created_utc,
        url
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

/*      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary={<>
            When my wife's school said they had BBQ for Teacher Appreciation week, she was excited to hear to there was a vegetarian option! It was a potato with BBQ sauce
          </>}
          secondary={
            <>
              Posted by <b>u/Dmed24</b> 22 hours ago
            </>
          }
        />
        <ListItemSecondaryAction>
          <Tooltip title="Dismiss">
            <IconButton color="Secondary"  edge="end" aria-label="delete">
              <Clear />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>*/

/*      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>

        <ListItemText
          primary={<>
            They are so ruthless.
          </>}
          secondary={
            <>
              Posted by <b>u/Maxamillion163</b> 21 hours ago
            </>
          }
        />
        <ListItemSecondaryAction>
          <Tooltip title="Dismiss">
            <IconButton color="Secondary"  edge="end" aria-label="delete">
              <Clear />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>*/