import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';

const Title = styled(Typography)`
  flex-grow: 1;
`;
const StyledButton = styled(Button)`
  margin-right: 10px !important;
`;
const StyledToolBar = styled(Toolbar)`
  background-color: #282c34;
`;

const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <StyledToolBar>
                    <Title variant="h6">
                        Reddit posts
                    </Title>
                    <StyledButton variant="contained" color="secondary">
                        Dismiss All
                    </StyledButton>
                </StyledToolBar>
            </AppBar>
        </div>
    );
}

export default NavBar;
