import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { ListItem, Divider, ListItemText, ListItemAvatar, Avatar, IconButton, ListItemSecondaryAction, Tooltip} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import defaultThumbnail from '../assets/images/reddit.png';
import { getFormattedCreationDate } from '../utils';
import { useDispatch } from "react-redux";
import { selectPost } from "../redux/selectedPostSlice";
import { dismissSinglePost, markAsRead } from "../redux/allPostsSlice";

const ReadTitle = styled.span`
  color: #9b9b9b;
`;

const ListItemWrapper = styled.div`
  transition: max-height 0.15s ease-in-out;
  max-height: ${({dismissed}) => dismissed ? 0 : 999}px;
  overflow: hidden;
`;

const thumbnailTypes = ['spoiler', 'self', 'default', 'nsfw'];

const PostListItem = forwardRef(({ post: {
      data: {
        id,
        title,
        thumbnail,
        author,
        created_utc,
      },
      read,
      dismissed,
    }
  }, ref) => {
  const dispatch = useDispatch();
  const creationDate = getFormattedCreationDate(created_utc);
  const hasDefaultThumbnails = thumbnailTypes.includes(thumbnail);
  const handleCurrentPost = () => {
    dispatch(selectPost(id));
    dispatch(markAsRead(id));
  }
  const handleDismissPost = () => {
    dispatch(dismissSinglePost(id));
  }

  return (
      <ListItemWrapper dismissed={dismissed}>
        <ListItem ref={ref} button onClick={handleCurrentPost} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="thumbnail" src={hasDefaultThumbnails ? defaultThumbnail : thumbnail} />
          </ListItemAvatar>

          <ListItemText
            primary={
              (read ? <ReadTitle>{title}</ReadTitle> : title)
            }
            secondary={
              <>
                by <b>u/{author}</b> {creationDate}
              </>
            }
          />
          <ListItemSecondaryAction>
            <Tooltip title="Dismiss">
              <IconButton onClick={handleDismissPost} color="secondary" edge="end" aria-label="delete">
                <Clear />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
      </ListItemWrapper>
  );
});

export default PostListItem;