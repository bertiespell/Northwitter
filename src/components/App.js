const React = require('react');
const NavBar = require('./Nav');
const SideBar = require('./SideBar');
const RightBar = require('./RightBar');

var App = React.createClass({
    
    render: function () {
        return (
            <div>
                <NavBar />
                <SideBar />
                <RightBar />
            </div>
        );
    }
});

module.exports = App;