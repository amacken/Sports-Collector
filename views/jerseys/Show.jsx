const React = require('react');

class Show extends React.Component {
    render() {
        const { name, team, number, purchasePrice } = this.props.jersey;
        return (
            <div>
                <h1>{name} Jersey Page</h1>
                <p>Name: {name}</p>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Purchase Price: ${purchasePrice}</p>
                <a href={'/jerseys'}>Back to the Jerseys Collection Page</a>
            </div>
        )
    }
}

module.exports = Show;