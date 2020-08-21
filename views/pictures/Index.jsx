const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { pictures } = this.props;
        return (
            <Default>
                <h1>My Picture Collection</h1>
                <nav>
                    <a href="/pictures/new">Enter A New Picture To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/jerseys'}>Go To Your Jerseys Collection</a>
                    <a href={'/balls'}>Go To Your Balls Collection</a>
                </nav>
                <ul>
                    {
                        pictures.map((picture, index) => {
                            return (
                                <li>
                                    <a href={`/pictures/${picture._id}`}>{picture.name}</a><br/>
                                    <p>Team: {picture.team}</p>
                                    <img src={picture.img}></img>
                                    <p>Hall of Famer: {picture.hallOfFamer ? `Yes` : `No`}</p>
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