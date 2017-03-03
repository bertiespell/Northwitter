const React = require('react');
const request = require('superagent');
require('../CSS/Profilecard.css');

const ProfileCard = React.createClass({
    getInitialState: function () {
        return {
            user_data: {},
            fetching: true
        };
    },
    componentDidMount: function () {

        request
            .get('https://protected-oasis-31937.herokuapp.com/tweets/curiousMau')
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
        if (this.state.fetching) return <p>Loading...</p>;
        return (
            <div className="profile-card">
                <div className="top-half">
                    <img className="cover-image" src={this.state.user_data.banner} />
                </div>
                <div className="bottom-half">
                    <img src={this.state.user_data.avatar_url} />
                    <div className="user-name-handle" >
                        <div className="user-name">
                            <h3>{this.state.user_data.username}</h3>
                        </div>
                        <span className="handle"><h4>{this.state.user_data.handle}</h4></span>
                    </div>
                    <div className="profile-card-stats">
                        <ul className="stat-list">
                            <li className="list-items">{this.state.user_data.tweets}</li>
                            <li className="list-items">{this.state.user_data.followers}</li>
                            <li className="list-items">{this.state.user_data.following}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = ProfileCard;