const React = require('react');
const Trend = require('./Trend');
const request = require('superagent');
// require('./../public/css/Trends.css');


const Trends = React.createClass({
    getInitialState: function () {
        return {
            trendData: [{trendName: 'WorldBookDay', tweetVol: 80440}, {trendName: 'Breath of the wild', tweetVol: 42413}],
            fetching: true
        };
    },
    componentDidMount: function () {
        request
        .get('https://protected-oasis-31937.herokuapp.com/trends')
        .end(function (err, res) {
            if (err) return console.log(err);
            this.setState({
                fetching: false,
                trendData: this.extractTrend(res)
            });
        }.bind(this));
    },
    extractTrend: function (res) {
        const trend = res.body.tweetData.trends[0].trends;
        const trendArr = [];
        for (var i = 0; i < 10; i++) {
            trendArr.push({trendName: trend[i].name, tweetVol: trend[i].tweet_volume, url: trend[i].url});
        }
        return trendArr;
        
    },
    render: function () {
        if (this.state.fetching) return <p>Loading...</p>;
        var addTrend = this.state.trendData.map(function (trend, i) {
            return <Trend key={i} trendName={trend.trendName} tweetVol={trend.tweetVol} url={trend.url}/>;
        });
        return (
            <div className="Trends">
                 {addTrend}
            </div>
        );
    }
});


module.exports = Trends;