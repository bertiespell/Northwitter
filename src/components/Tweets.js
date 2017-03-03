const React = require('react');
require('../CSS/tweets.css');
const Tweets = React.createClass({
    render: function () {
        return (
            <div className="tweets">
                <p>{this.props.username}</p>
                <img src={this.props.avatar} />
                <p>{this.props.handle}</p>
                <p>{this.props.timePosted}</p>
                <p>{this.props.tweet}</p>
            </div>
        );
    }
});

module.exports = Tweets;