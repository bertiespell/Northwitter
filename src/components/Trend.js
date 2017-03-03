const React = require('react');
require('../CSS/Trends.css');


const Trend = React.createClass({
    render: function () {

        return (
            <div className="trend">
                <a href={this.props.url}>

                    {this.props.trendName}
                </a>
                <p></p>
                {this.formatTweetVol((this.props.tweetVol))}
                <p></p>


            </div>
        )
    },
    formatTweetVol: function (str) {
        if(str && str < 10000) return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' Tweets';
        if(str && str > 10000) return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',').slice(-3) + 'K Tweets';

    }
})


module.exports = Trend;