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
                <Feed tweetData={this.state.tweetData} fetching={this.state.fetching}/>
                <TweetForm />
            </div>
        );
    },
    cleanTweetsProperties: function (tweets) {
        var cleanedTweets = [];
        cleanedTweets.push({
            username: tweets.user.name,
            avatar: tweets.user.profile_image_url,
            handle: "@" + tweets.user.screen_name,
            timePosted: tweets.created_at,
            tweet: tweets.text
        })
        return cleanedTweets;
    },
    extractTweet: function (users, limit) {
        var reducezz = users.reduce(function (acc, user) {
            const tweets = (user.tweets.slice(0, limit))
            return acc.concat(tweets);
        }, []);
        console.log(reducezz);
        return reducezz;
        // for (var i = 0; i < 10; i++){
        //     let newUser = res.body[i].tweets[0]
        //     tweetArr.push({
        //         username: newUser.user.name,
        //        avatar: newUser.user.profile_image_url,
        //         handle: "@" + newUser.user.screen_name,
        //         timePosted: newUser.created_at ,
        //         tweet: newUser.text
        //     })
        // }
        // return tweetArr;
    }
});

module.exports = RightBar;