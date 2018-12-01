// Header

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LogoIcon from '../assets/logo.svg';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logo: {
        height: 40,
        width: 40,
        paddingRight: 10
    },
    header: {
        backgroundColor: '#009270'
    },
    headerWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    logoContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function SearchAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <div className={classes.headerWrap}>
                    <div className={classes.logoContent}>
                        <img className={classes.logo} src={LogoIcon} />
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                Demo Cricket
                        </Typography>
                    </div>
                    <div className={classes.buttonContent}>
                        <Button size="small" variant="contained" color="secondary" className={classes.button}>
                            Matches
                        </Button>
                        <Button size="small" variant="contained" color="secondary" className={classes.button}>
                            Schedule
                        </Button>
                        <Button size="small" variant="contained" color="secondary" className={classes.button}>
                            Gallery
                        </Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    );
}

SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);