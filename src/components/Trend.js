const React = require('react');


const Trend = React.createClass({
    render: function () {
        return (
            <div className="trend">
                <a href={this.props.url}>

                    {this.props.trendName}
                </a>
                <p></p>
                {this.props.tweetVol}
                <p></p>

            </div>
        )
    }
})


module.exports = Trend;