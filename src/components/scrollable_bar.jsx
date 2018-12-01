//ScrollbleBar

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
        <Typography component="div" style={{ padding: 8 * 3, background: '#E3E6E3' }}>
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
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollbleBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            loading: false
        };
    }

    handleChange = (event, value) => {
        this.setState({ value , loading: true});
        setTimeout(() => { 
            this.setState(() => ({loading: false}))
        }, 500);
     
    };

    render() {
        const { classes, commentaryData } = this.props;
        const { value, loading } = this.state;

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
                    <Header />
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        {this.renderTabHeader(commentaryData)}
                    </Tabs>
                    {this.renderTabContent()}
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    {/* <AppBar position="static" className={classes.header} color="default">

                    </AppBar> */}
                     <Header />
                        <Tabs
                            value={0}
                            onChange={this.handleChange}
                            scrollable
                            scrollButtons="on"
                            indicatorColor="#fff"
                            textColor="primary"
                            >
                            <Tab label="Default" />
                        </Tabs>
                    <TabContainer>No Inningg Data</TabContainer>}
                </div>
            )
        }
    }

    renderTabContent() {
        const { commentaryData } = this.props;
        const { value } = this.state;

        if (commentaryData.data.length > 0) {
            return (
                <TabContainer>
                    <CommentaryPanel
                        panelData={commentaryData.data[value]}
                    />
                </TabContainer>
            )
        }
    }

    renderTabHeader(commentaryData) {
        if (commentaryData.data.length > 0) {
            return commentaryData.data.map((innings, idx) => {
                if (innings) {
                    let title = `Innings-${innings.innings_id}`
                    return (
                        <Tab key={idx} label={title} />
                    )
                }
            })
        }
    }
}

ScrollbleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollbleBar);