const React = require('react');
const Feed = require('./Feed');
const TweetForm = require('./TweetForm');
const request = require('superagent');
require('../CSS/rightbar.css');

const RightBar = React.createClass({
    getInitialState: function () {
        return {
            tweetData: {
                avatar: "https://pbs.twimg.com/profile_images/1741073407/4Qcp59HT_bigger",
                username: "Apahau",
                handle: "@" + "blogaphau",
                timePosted: "4 hours",
                tweet: "eorrere"
            },
            fetching: true,
        }
    },
    componentDidMount: function () {
        request
        .get('https://protected-oasis-31937.herokuapp.com/tweets')
        .end(function(err, res) {
            if (err) return console.log(err);
            const users = res.body.filter(function (user) {
                return !user.tweets.errors;
            });
            // console.log(this.extractTweet(tweets));
            this.setState({
                fetching: false,
                tweetData: this.extractTweet(users, 1)
            })
        }.bind(this))
    },
    render: function () {
        return (
            <div className="rightbar">
                <TweetForm tweetData={this.props.tweetData}/>
                <Feed tweetData={this.state.tweetData} fetching={this.state.fetching}/>
            </div>
        );
    },
    extractTweet: function (users, limit) {
        var tweets = users.reduce(function (acc, user) {
            const tweets = (user.tweets.slice(0, limit))
            return acc.concat(tweets);
        }, []);
        return tweets;
    }
});

module.exports = RightBar;