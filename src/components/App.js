const React = require('react');
const NavBar = require('./Nav');
const SideBar = require('./SideBar');

var App = React.createClass({
    
    render: function () {
        return (
            <div>
                <NavBar />
                <SideBar />
            </div>
        );
    }
});

module.exports = App;