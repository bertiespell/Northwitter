const React = require('react');
const request = require('superagent');
require('../CSS/Profilecard.css');
var API = 'https://protected-oasis-31937.herokuapp.com/tweets/';

const ProfileCard = React.createClass({
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
                            {this.props.tweetData.username}
                        </div>
                        <div className="user-handle">
                            {this.props.tweetData.handle}
                        </div>
                    </div>
                    <div className="profile-card-stats">
                        <ul className="stat-list">
                            <li className="list-items">
                                <p className="listTitles"> TWEETS </p>
                                {this.props.tweetData.tweets}
                            </li>
                            <li className="list-items">
                                <p className="listTitles"> FOLLOWERS </p>
                                {this.props.tweetData.followers}
                            </li>
                            <li className="list-items">
                                <p className="listTitles"> FOLLOWING </p>
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