const React = require('react');
const ProfileCard = require('./ProfileCard');
const WhoToFollow = require('./WhoToFollow');
const Trends = require('./Trends');
require('/Users/lukemurray/Desktop/Northcoders-sprints/week-4/w04-northwitter/public/css/Sidebar.css');

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