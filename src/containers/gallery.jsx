
// Home

//Global
import React, { Component} from 'react';
import Loadable from 'react-loading-overlay';
import axios from 'axios';
import {isEmpty} from 'lodash';
import { Router, Switch} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

//Local
import ScrollBar from '../components/scrollable_bar.jsx';
const BASEURL = 'https://livescore.sportstarlive.com/api/cricket/commentary/pakistan-v-new-zealand-test-series-in-uae-2018/44249/pakistan-vs-new-zealand'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            commentaryData: null
        }
    }

    componentDidMount() {
        this.getInningsData();
    }
    
    render() {
        const {loading, commentaryData} = this.state;

        if (loading) {
            return (
                <Loadable
                    active={loading}
                    spinner
                    text='Fetching Innings details from our data centre...Please Wait!!!'
                >
                </Loadable>
            )
        } else if (commentaryData === null && !loading) {
            return <div> No data Found</div>
        } else {
            return (
                <ScrollBar commentaryData={commentaryData} />
            )
        }
    }

    getInningsData = () => {
        axios.get(BASEURL)
        .then(res => {
            if (res && !isEmpty(res.data.commentarydetails)) {
                this.setState({
                    commentaryData: res.data.commentarydetails,
                    loading: false
                })
            } else {
                this.setState({
                    commentaryData: null,
                    loading: false
                })
            }
        })
    }
}

export default(Home);
