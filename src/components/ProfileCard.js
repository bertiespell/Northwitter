const React = require('react');
const request = require('superagent');
// require('./ProfileCard.css');

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
                <img src={this.state.user_data.avatar_url} />
                <h3>{this.state.user_data.username}</h3>
                <h4>{this.state.user_data.handle}</h4>
                <h4>{this.state.user_data.tweets}</h4>
                <h4>{this.state.user_data.followers}</h4>
                <h4>{this.state.user_data.following}</h4>
            </div>
        );
    }
});


module.exports = ProfileCard;