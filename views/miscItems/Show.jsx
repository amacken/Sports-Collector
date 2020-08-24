const React = require('react');
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { name, description, sport, img, team, number, hallOfFamer, purchasePrice, isFramed, certificationNumber } = this.props.miscItem;
        return (
            <Default>
                <h1>{name} Misc. Item Page</h1>
                <img src={img}></img>
                <p>Name: {name}</p>
                <p>Item Desciption: {description}</p>
                <p>Sport: {sport}</p>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Inducted into the Hall Of Fame: {hallOfFamer ? `Yes` : `No`}</p>
                <p>Purchase Price: ${purchasePrice}</p>
                <p>Item is framed: {isFramed ? `Yes` : `No`}</p>
                <p>Certification number: {certificationNumber}</p>
                <a href={'/miscItems'}>Back to the Misc. Items Collection Page</a>
            </Default>
        )
    }
}

module.exports = Show;