const React = require('react');
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { name, team, number, hallOfFamer, purchasePrice } = this.props.jersey;
        return (
            <Default>
                <h1>{name} Jersey Page</h1>
                <p>Name: {name}</p>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Inducted into the Hall Of Fame: {hallOfFamer ? `Yes` : `No`}</p>
                <p>Purchase Price: ${purchasePrice}</p>
                <a href={'/jerseys'}>Back to the Jerseys Collection Page</a>
            </Default>
        )
    }
}

module.exports = Show;