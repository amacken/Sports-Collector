const React = require('react');
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { name, sport, img, hallOfFamer, purchasePrice, certificationNumber } = this.props.ball;
        return (
            <Default>
                <h1>{name} Ball Page</h1>
                <img src={img}></img>
                <p>Name: {name}</p>
                <p>Sport: {sport}</p>
                <p>Inducted into the Hall Of Fame: {hallOfFamer ? `Yes` : `No`}</p>
                <p>Purchase Price: ${purchasePrice}</p>
                <p>Certification number: {certificationNumber}</p>
                <a href={'/balls'}>Back to the Balls Collection Page</a>
            </Default>
        )
    }
}

module.exports = Show;