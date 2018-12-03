// Home

//Global
import React, { Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Loadable from 'react-loading-overlay';
import {isEmpty} from 'lodash';

import {getData, getCommentaryData} from '../actions/commentary.action'

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
        getCommentaryData();
        getData();
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

const mapStateToProps = state => ({
    commentaryData: state.commentary,
    loading: state.loading
})

const mapDispatchToProps = dispatch => ({

})

export default connect (mapStateToProps, mapDispatchToProps)(Home);
