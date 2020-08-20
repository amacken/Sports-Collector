const React = require('react');
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { name, img, team, number, hallOfFamer, purchasePrice, isFramed, certificationNumber } = this.props.jersey;
        return (
            <Default>
                <h1>{name} Jersey Page</h1>
                <img src={img}></img>
                <p>Name: {name}</p>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Inducted into the Hall Of Fame: {hallOfFamer ? `Yes` : `No`}</p>
                <p>Purchase Price: ${purchasePrice}</p>
                <p>Jersey is framed: {isFramed ? `Yes` : `No`}</p>
                <p>Certification number: {certificationNumber}</p>
                <a href={'/jerseys'}>Back to the Jerseys Collection Page</a>
            </Default>
        )
    }
}

module.exports = Show;