const React = require('react');
const NavBar = require('./Nav');
const SideBar = require('./SideBar');
const RightBar = require('./RightBar');

var App = React.createClass({

    render: function () {
        return (
            <div className="container">
                <NavBar />
                <div className="row">   
                    
                    <SideBar />

                    <div className="col-md-8">
                    <RightBar />
                    </div>
                </div>
                <div>
                </div>
            </div>

        );
    }
});

module.exports = App;