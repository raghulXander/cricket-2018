//ScrollableBar

//Global
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import Loadable from 'react-loading-overlay';

//Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import SpeakerIcon from '@material-ui/icons/Speaker';

import Header from '../components/header.jsx';

//Local
import CommentaryPanel from './commentary_panel'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3, background: `linear-gradient(to right, #414345, #232526)`}}>
            {props.children}
        </Typography>
    );
}
  
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTtop: '50px',
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            loading: true,
            commentaryData: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.commentaryData !== nextProps.commentaryData) {
            this.setState({
                commentaryData: nextProps.commentaryData,
                loading: nextProps.loading
            })
        }
    }

    handleChange = (event, value) => {
        this.setState({ value , loading: true});
        setTimeout(() => { 
            this.setState(() => ({loading: false}))
        }, 500);
     
    };

    render() {
        const { classes } = this.props;
        const { value, loading, commentaryData } = this.state;

        if (loading) {
            return (
                <Loadable
                    active={loading}
                    spinner
                    text='Loading Innings details...'
                >
                </Loadable>
            )
        }

        if (!isEmpty(commentaryData) && commentaryData.data.length > 0) {
            return (
                <div className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        {this.renderTabHeader(commentaryData)}
                    </Tabs>
                    {this.renderTabContent()}
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    <Tabs
                        value={0}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="secondary"
                        textColor="primary"
                        >
                        <Tab label="Default" />
                    </Tabs>
                    <TabContainer>No Innings Data</TabContainer>
                </div>
            )
        }
    }

    renderTabContent() {
        const { commentaryData } = this.props;
        const { value } = this.state;

        return (
            <TabContainer>
                <CommentaryPanel
                    panelData={commentaryData.data[value]}
                />
            </TabContainer>
        )
    }

    renderTabHeader(commentaryData) {
        return commentaryData.data.map((innings, idx) => {
            if (innings) {
                let title = `Match - ${innings.innings_id}`
                return (
                    <Tab key={idx} label={title} />
                )
            }
        })
    }
}

ScrollableBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableBar);