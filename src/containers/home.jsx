import React, { Component } from "react";
import { Parallax } from "react-parallax";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Home from '../assets/home.jpg';
import Home2 from '../assets/home_2.jpg';
import history from '../routes/history';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    insideButtonStyles: {
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        flexDirection: 'column',
        justifyContent: 'space-between',
        display: 'flex'
    },
    insideStyles: {
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    },
    middleLayer: {
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex'
    },
    cricketText: {
        fontFamily: 'Pacifico',
        fontSize: 26
    }
});

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    }

    componentDidMount() {
        this.countInterval = setInterval(() => {
            const date = this.calculateCountdown(this.props.date);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }
    
    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
        };

        // clearing when date is reached
        if (diff <= 0) {
            return false;
        }
    
        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }

        timeLeft.sec = diff;
    
        return timeLeft;
    }
    
    stop() {
        clearInterval(this.countInterval);
    }
    
    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const {classes} =  this.props;

        return (
            <div className='main-wrap' style={{textAlign: 'center'}}>
                <Parallax bgImage={Home2} strength={-90}
                    renderLayer={percentage => (
                        <div>
                            <div
                                style={{
                                    position: "absolute",
                                    background: `linear-gradient(to right, #00c9ff, #92fe9d)`,
                                    left: "50%",
                                    top: "50%",
                                    borderRadius: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: percentage * 500,
                                    height: percentage * 500
                                }}
                            />
                        </div>
                )}>
                    <div style={{ height: '100vh' }}>
                        <div className={`${classes.insideStyles} quoteContentWrapper`}>
                            <span className="quoteSymbol quoteSymbol--left">
                                <i className="fa fa-quote-left"></i>
                            </span>
                            <span className="quoteContent js-quote">
                                It's all about you perform when given the chance.
                            </span>
                            <span className="quoteSymbol quoteSymbol--right">
                                <i className="fa fa-quote-right"></i>
                            </span>
                            <p className="quoteAuthor js-quoteAuthor">Rahul Dravid</p>
                        </div>
                    </div>
                </Parallax>
                <h1 style={{margin: '30px'}}>| | | | | | |</h1>
                <Parallax
                bgImage={Home}
                strength={300}
                blur={{ min: -1, max: 3 }}
                renderLayer={percentage => (
                    <div>
                    <div
                        style={{
                        position: "absolute",
                        background: `linear-gradient(to right, #fceabb, #f8b500)`,
                        left: "50%",
                        top: "50%",
                        borderRadius: "50%",
                        transform: "translate(-50%,-50%)",
                        width: percentage * 500,
                        height: percentage * 500
                        }}
                    />
                    </div>
                )}
                >
                    <div style={{ height: 500 }}>
                        <div className={classes.insideButtonStyles}>
                            <Button size="small" variant="contained" color="secondary" className={classes.button} onClick={() => history.push('matches')}>
                                Matches
                            </Button>
                            <Button size="small" variant="contained" color="secondary" className={classes.button} onClick={() => history.push('schedule')}>
                                Schedule
                            </Button>
                            <Button size="small" variant="contained" color="secondary" className={classes.button} onClick={() => history.push('gallery')}>
                                Gallery
                            </Button>
                        </div>
                    </div>
                </Parallax>
                
                <h1>| | | | | | |</h1>
                <div className={classes.middleLayer} style={{ height: 400 }}>
                    <div className={classes.cricketText}>
                        How long for 2019 Cricket World Cup?
                    </div>
                    {this.renderCountdown()}
                </div>
                <h1>| | |</h1>
            </div>
        )
    }

    renderCountdown() {
        const countDown = this.state;

        return (
            <div className="countdown-wrap">
                <div id="countdown">
                    <div id='tiles'>
                        <span>{this.addLeadingZeros(countDown.days)}</span>
                        <span>{this.addLeadingZeros(countDown.hours)}</span>
                        <span>{this.addLeadingZeros(countDown.min)}</span>
                        <span>{this.addLeadingZeros(countDown.sec)}</span>
                    </div>
                    <div className="labels">
                        <li>Days</li>
                        <li>Hours</li>
                        <li>Mins</li>
                        <li>Secs</li>
                    </div>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    date: PropTypes.string.isRequired
};

App.defaultProps = {
    date: new Date('Wednesday, 30 May 2019 0:00:00')
};

export default withStyles(styles)(App);

