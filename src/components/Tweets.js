const React = require('react');
require('../CSS/tweets.css');
const Tweets = React.createClass({
    render: function () {
        return (
                <div>

                <img className="avatar" src={this.props.avatar} />

                <div className="nameAndDate">
                    <p className="timePosted">{this.formatDate(this.props.timePosted)}</p>
                    <p className="username"> @{this.props.username}</p>
                    <p className="handle"> {this.props.handle}</p>
                    <p className="tweet">{this.props.tweet}</p>
                </div>
                
                </div>   


        );
    },
    formatDate: function (date) {
        var newDate = date.split(' ');
        return newDate[1] + ' ' + newDate[2];
    }
});

module.exports = Tweets;