const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { miscItems } = this.props;
        return (
            <Default>
                <h1>My Miscellaneous Items Collection</h1>
                <nav>
                    <a href="/miscItems/new">Enter A New Item To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/jerseys'}>Jerseys</a>
                    <a href={'/balls'}>Balls</a>
                    <a href={'/pictures'}>Pictures</a>
                    <a href={'/bobbleheads'}>Bobbleheads</a>
                    <a href={'/cards'}>Cards</a>
                </nav>
                <ul>
                    {
                        miscItems.map((miscItem, index) => {
                            return (
                                <li>
                                    <a href={`/miscItems/${miscItem._id}`}>{miscItem.name}</a><br/>
                                    <p>Sport: {miscItem.sport}</p>
                                    <img src={miscItem.img}></img>
                                    <p>Hall of Famer: {miscItem.hallOfFamer ? `Yes` : `No`}</p>
                                    <p>Item is framed: {miscItem.isFramed ? `Yes` : `No`}</p>
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