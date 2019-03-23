import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1
    }
}

const Header = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="h6" color="inherit">
                        Facebook
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);