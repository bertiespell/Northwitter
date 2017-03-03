const React = require('react');
const request = require('superagent');
require('../CSS/Profilecard.css');
var API = 'https://protected-oasis-31937.herokuapp.com/tweets/';

const ProfileCard = React.createClass({
    // getInitialState: function () {
    //     return {
    //         user_data: {},
    //         fetching: true
    //     };
    // },
    // componentDidMount: function () {
    //     request
    //         .get(API + 'northcoders')
    //         .end(function (err, res) {
    //             this.setState({
    //                 fetching: false,
    //                 user_data: this.extractUser(res)
    //             });
    //         }.bind(this));
    // },
    // extractUser: function (res) {
    //     const user = res.body.tweetData[0].user;
    //     return {
    //         banner: user.profile_banner_url,
    //         avatar_url: user.profile_image_url,
    //         username: user.name,
    //         handle: '@' + user.screen_name,
    //         tweets: user.statuses_count,
    //         followers: user.followers_count,
    //         following: user.friends_count
    //     };
    // },
    render: function () {
        if (this.props.fetching) return <p>Loading...</p>;
        return (
            <div className="profile-card">
                <div className="top-half">
                    <img className="cover-image" src={this.props.tweetData.banner} />
                </div>
                <div className="bottom-half">
                    <img className="profile-image" src={this.props.tweetData.avatar_url} />
                    <div className="user-name-handle" >
                        <div className="user-name">
                            <h3>{this.props.tweetData.username}</h3>
                        </div>
                        <span className="handle"><h4>{this.props.tweetData.handle}</h4></span>
                    </div>
                    <div className="profile-card-stats">
                        <ul className="stat-list">
                            <li className="list-items">
                                <p> Tweets </p>
                                {this.props.tweetData.tweets}</li>
                            <li className="list-items">
                                <p> Following </p>
                                {this.props.tweetData.followers}
                            </li>
                            <li className="list-items">
                                <p> Followers </p>
                                {this.props.tweetData.following}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = ProfileCard;