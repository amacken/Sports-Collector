const React = require('react');
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { name, sport, img, team, number, hallOfFamer, } = this.props.bobblehead;
        return (
            <Default>
                <h1>{name} Bobblehead Page</h1>
                <img src={img}></img>
                <p>Name: {name}</p>
                <p>Sport: {sport}</p>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Inducted into the Hall Of Fame: {hallOfFamer ? `Yes` : `No`}</p>
                <a href={'/bobbleheads'}>Back to the Bobbleheads Collection Page</a>
            </Default>
        )
    }
}

module.exports = Show;