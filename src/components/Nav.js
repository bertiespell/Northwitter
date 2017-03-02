const React = require('react');
const Logos = require('./Logos');


var NavBar = React.createClass({
    render: function () {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <Logos />
                </div>
            </nav>
        );
    }
});



module.exports = NavBar;
