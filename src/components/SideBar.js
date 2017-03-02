const React = require('react');
const ProfileCard = require('./ProfileCard');
const WhoToFollow = require('./WhoToFollow');
const Trends = require('./Trends');
require('../CSS/Trends.css');

const SideBar = React.createClass({
    render: function () {
        return (
            <div className="sidebar">
                <ProfileCard />
                <WhoToFollow />
                <Trends />
            </div>
        );
    }
});

module.exports = SideBar;