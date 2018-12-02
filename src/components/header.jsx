// Header

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LogoIcon from '../assets/logo.svg';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import history from '../routes/history.js';

const ITEM_HEIGHT = 48;

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
        color: '#fff'
    },
    active: {
        textDecoration: 'underline'
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
        alignItems: 'center',
        padding: '0 8px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: `rgba(243, 243, 243, 0.22)`,
            borderRadius: '5px',
            padding: '0 8px'
            // boxShadow: `4px 4px 5px 0px rgba(170, 0, 12, 0.57), 0px 2px 2px 0px rgba(170, 0, 12, 0.57), 0px 3px 1px -2px rgba(170, 0, 12, 0.57)`
        }
    }
});


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        }

        this.menuList = [
            {
              text: 'Matches',
              tooltip: 'Matches',
              onTouchTap: ()=>{history.push('matches');this.getActiveClass('matches');this.setState({ anchorEl: null });}
            },
            {
              text: 'Summary',
              tooltip:'Summary',
              onTouchTap: ()=>{history.push('schedule');this.getActiveClass('schedule');this.setState({ anchorEl: null });}
            },
            {
              text: 'Gallery',
              tooltip:'Gallery',
              onTouchTap: ()=>{history.push('gallery');this.getActiveClass('gallery');this.setState({ anchorEl: null });}
            }
        ]        
    }

    render() {
        const { classes} = this.props;
        console.log(window.location,"eeee")

        return (
            <div className={classes.root}>
            <AppBar position="fixed" className={classes.header}>
                <Toolbar>
                    <div className={classes.headerWrap}>
                        <div className={classes.logoContent} onClick={() => history.push('')}>
                            <img className={classes.logo} src={LogoIcon} />
                            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                    Demo Cricket
                            </Typography>
                        </div>
                        {window.innerWidth >= 768 && <div className={classes.buttonContent}>
                            <Button size="small"  color="secondary" className={`${classes.button} ${this.getActiveClass('matches')}`} onClick={() => {history.push('matches');this.getActiveClass('matches')}}>
                                Matches
                            </Button>
                            <Button size="small"  color="secondary" className={`${classes.button} ${this.getActiveClass('schedule')}`} onClick={() => {history.push('schedule');this.getActiveClass('schedule')}}>
                                Summary
                            </Button>
                            <Button size="small"  color="secondary" className={`${classes.button} ${this.getActiveClass('gallery')}`} onClick={() => {history.push('gallery');this.getActiveClass('gallery')}}>
                                Gallery
                            </Button>
                        </div>}
                        {window.innerWidth < 768 && this.renderSideMenu()}
                    </div>
                </Toolbar>
            </AppBar>
            </div>
        );
    }

    getActiveClass(name) {
        if (name === 'matches') {
            return window.location.pathname === `/${name}` ? 'link-active' : '';
        } else if (name === 'schedule') {
            return window.location.pathname === `/${name}` ? 'link-active' : '';
        } else if (name === 'gallery') {
            return window.location.pathname === `/${name}` ? 'link-active' : '';
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    renderSideMenu() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <React.Fragment>
                <IconButton
                    color="primary"
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                        },
                    }}
                    >
                    {this.menuList.map(option => (
                        <MenuItem key={option.text}  onClick={option.onTouchTap}>
                        {option.text}
                        </MenuItem>
                    ))}
                </Menu>
            </React.Fragment>
        )
    }
    
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);