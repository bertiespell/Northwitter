const React = require('react');
require('../CSS/tweetform.css');

const TweetForm = React.createClass({
    render: function () {
        return (
            <div className="tweetform">
                <img className="tweetformimage" src={this.props.tweetData.avatar_url}/>
                <input type="text" placeholder="What's happening?"></input>
            </div>
        );
    }
});

module.exports = TweetForm;