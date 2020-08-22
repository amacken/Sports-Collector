const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { cards } = this.props;
        return (
            <Default>
                <h1>My Card Collection</h1>
                <nav>
                    <a href="/cards/new">Enter A New Card To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/jerseys'}>Jerseys</a>
                    <a href={'/balls'}>Balls</a>
                    <a href={'/pictures'}>Pictures</a>
                    <a href={'/bobbleheads'}>Bobbleheads</a>
                </nav>
                <ul>
                    {
                        cards.map((card, index) => {
                            return (
                                <li>
                                    <a href={`/cards/${card._id}`}>{card.name}</a><br/>
                                    <p>Sport: {card.sport}</p>
                                    <p>Team: {card.team}</p>
                                    <img src={card.img}></img>
                                    <p>Hall of Famer: {card.hallOfFamer ? `Yes` : `No`}</p>
                                    <a href={`/cards/${card._id}/edit`}>Edit</a><br/>
                                    <br/>
                                    <form action={`/cards/${card._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                    <br/>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index;