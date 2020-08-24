const React = require('react');
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { name, sport, img, team, number, hallOfFamer, purchasePrice, certificationNumber } = this.props.card;
        return (
            <Default>
                <h1>{name} Card Page</h1>
                <img src={img}></img>
                <p>Name: {name}</p>
                <p>Sport: {sport}</p>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Year: {year}</p>
                <p>Inducted into the Hall Of Fame: {hallOfFamer ? `Yes` : `No`}</p>
                <p>Purchase Price: ${purchasePrice}</p>
                <p>Certification number: {certificationNumber}</p>
                <a href={'/cards'}>Back to the Cards Collection Page</a>
            </Default>
        )
    }
}

module.exports = Show;