const React = require('react');
const NavBar = require('./Nav');
const SideBar = require('./SideBar');
const RightBar = require('./RightBar');
var API = 'https://protected-oasis-31937.herokuapp.com/tweets/';
const request = require('superagent');


var App = React.createClass({
getInitialState: function () {
        return {
            user_data: {},
            fetching: true
        };
    },
    componentDidMount: function () {
        request
            .get(API + 'ruthymng')
            .end(function (err, res) {
                this.setState({
                    fetching: false,
                    user_data: this.extractUser(res)
                });
            }.bind(this));
    },
    extractUser: function (res) {
        const user = res.body.tweetData[0].user;
        return {
            banner: user.profile_banner_url,
            avatar_url: user.profile_image_url,
            username: user.name,
            handle: '@' + user.screen_name,
            tweets: user.statuses_count,
            followers: user.followers_count,
            following: user.friends_count
        };
    },
    render: function () {
        return (
            <div className="container">
                <NavBar />
                <div className="row">   
                    
                    <SideBar tweetData={this.state.user_data}/>

                    <div className="col-md-8">
                    <RightBar tweetData={this.state.user_data}/>
                    </div>
                </div>
                <div>
                </div>
            </div>

        );
    }
});

module.exports = App;