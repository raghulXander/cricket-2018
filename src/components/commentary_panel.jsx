//CommentaryPanel

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {isEmpty} from 'lodash';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import SummaryTable from './summary_table.jsx';

const styles = theme => ({
    card: {
        // maxWidth: 400,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
        marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        // background: '#F2994A'  /* fallback for old browsers */
//      background: -webkit-linear-gradient(to right, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
        background: `linear-gradient(to right, #F2C94C, #F2994A)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    },
    cardSubHeader: {
        fontStyle: 'italic'
    },
    cardHeader: {
        fontWeight: 600,
    },
    cardContent: {
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
    },
    summaryWrap: {
        backgroundColor: '#000'
    }
});

class CommentaryPanel extends Component {
    constructor(props) {
        super(props);

        this.state = { expanded: false };
    }

    render() {
        const { classes, panelData} = this.props;

        if (panelData.messages.length > 0) {
            return (
                <div className={classes.cardGroup}>
                    {this.renderPanelMessages(panelData.messages)}
                </div>
            )
        } else {
            return (
                <div className={classes.cardGroup}>
                    No Messages Yet
                </div>
            )
        }
        
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    getAvatarLetter(word) {
        switch (word) {
            case 'four':
                return '4';
            case 'two':
                return '2';
            case 'three':
                return '3';
            case 'normal':
                return '0';
            case 'catch':
                return 'W';
            case 'six':
                return '6';
            case 'one':
                return '1';
            case 'end of over':
                return '-';
            case 'run out':
                return 'W';
            case 'wicket':
                return 'W';
            case 'start of inning':
                return '-';
            case 'comment':
                return '-';
            case 'bye':
                return 'lb';
            default: 
                return '-';
        }
    }
    getAvatarClass(word) {
        switch (word) {
            case 'four':
                return 'classFour';
            case 'two':
                return 'classTwo';
            case 'three':
                return 'classThree';
            case 'normal':
                return 'classZero';
            case 'catch':
                return 'classWicket';
            case 'six':
                return 'classSix';
            case 'one':
                return 'classOne';
            case 'end of over':
                return 'classEndofOver';
            case 'run out':
                return 'classWicket';
            case 'wicket':
                return 'classWicket';
            case 'start of inning':
                return 'classStart';
            case 'comment':
                return 'classStart';
            case 'bye':
                return 'classExtra';
            default: 
                return '-';
        }
    }
    getHeaderClass(word) {
        switch (word) {
            case 'four':
                return 'headerFour';
            case 'two':
                return 'headerTwo';
            case 'three':
                return 'headerThree';
            case 'normal':
                return 'headerZero';
            case 'catch':
                return 'headerWicket';
            case 'six':
                return 'headerSix';
            case 'one':
                return 'headerOne';
            case 'end of over':
                return 'headerEndofOver';
            case 'run out':
                return 'headerWicket';
            case 'wicket':
                return 'headerWicket';
            case 'start of inning':
                return 'headerStart';
            case 'comment':
                return 'headersStart';
            case 'bye':
                return 'headerExtra';
            default: 
                return '-';
        }
    }

    renderPanelMessages(messageList) {
        const {classes} = this.props;

        return messageList.map((message, idx) => {
            return (
                <div key={idx} className="panel-message-wrap">
                <Card key={idx} className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Ball" className={`${classes.avatar} ${this.getAvatarClass(message.type)}`}>
                                {this.getAvatarLetter(message.type)}
                            </Avatar>
                        }
                        title={`Over Number - ${message.over_num}`}
                        subheader={message.type}
                        classes={{root: `${this.getHeaderClass(message.type)}`,
                            title: classes.cardHeader,
                            subheader: classes.cardSubHeader
                        }}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography paragraph component="message" dangerouslySetInnerHTML={{__html: message.message_text}}></Typography>
                    </CardContent>
                    {/* {!isEmpty(message.summary) && <CardActions className={classes.actions} disableActionSpacing>

                        <IconButton
                            className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>} */}
                    
                </Card>
                { !isEmpty(message.summary) && this.renderSummary(message.summary)}
                </div>
            )
        })
    }

    renderSummary(summary) {
        const {classes} = this.props;
        return(
            <div className={classes.summaryWrap}>
                <Paper className={classes.paperRoot} elevation={1}>
                    <Typography variant="h5" component="h3">
                        Summary
                    </Typography>
                    <Divider />
                    <SummaryTable data={summary} />
                    <Divider />
                </Paper>
            </div>
        )
    }
}

CommentaryPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentaryPanel);
