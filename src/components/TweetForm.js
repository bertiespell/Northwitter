const React = require('react');

const TweetForm = React.createClass({
    render: function () {
        return (
            <div className="tweetform">
                <img src={this.props.tweetData.avatar}/>
                <input type="text" placeholder="What's happening?"></input>
            </div>
        );
    }
});

module.exports = TweetForm;