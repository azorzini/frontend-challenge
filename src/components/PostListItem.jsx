import React from 'react';
import styled from 'styled-components';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, IconButton, ListItemSecondaryAction, Tooltip} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import defaultThumbnail from '../assets/images/reddit.png';
import {useDispatch, useSelector} from "react-redux";
//import axios from "axios";

const StyledList = styled(List)`
  width: 100%;
`;

const ReadTitle = styled.span`
  color: #9b9b9b;
`;

const PostListItem = ({ pages }) => {

  debugger;

  return (
    <StyledList>
      <ListItem button onClick={() => null} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={defaultThumbnail} />
        </ListItemAvatar>

        <ListItemText
          primary={<>
            <ReadTitle>It’s still a work in progress but this is our his and hers set up so far!</ReadTitle>
          </>}
          secondary={
            <>
              Posted by <b>u/AwesomeAdviceBot</b> 17 hours ago
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
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
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
      </ListItem>

      <Divider variant="inset" component="li" />

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
      </ListItem>

      <Divider variant="inset" component="li" />
    </StyledList>
  );
};

export default PostListItem;

