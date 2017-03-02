const React = require('react');
const Tweets = require('./Tweets');

const Feed = React.createClass({
    render: function () {
        if (this.props.fetching) return <p>Loading...</p>;
        var addTweet = this.props.tweetData.map(function (tweet, i){
            return <Tweets key={i}
            avatar={tweet.user.profile_image_url}
            username={tweet.user.screen_name}
            handle={tweet.user.name}
            timePosted={tweet.user.created_at}
            tweet={tweet.text}/>
        })
        return (
            <div className="feed">
                {addTweet}
            </div>
        );
    }
});

module.exports = Feed;