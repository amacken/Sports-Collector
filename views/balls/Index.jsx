const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { balls } = this.props;
        return (
            <Default>
                <h1>My Balls Collection</h1>
                <nav>
                    <a href="/balls/new">Enter A New Ball To Your Collection</a>
                </nav>
                <ul>
                    {
                        balls.map((ball, index) => {
                            return (
                                <li>
                                    <a href={`/balls/${ball._id}`}>{ball.name}</a><br/>
                                    <img src={ball.img}></img>
                                    <p>Hall of Famer: {ball.hallOfFamer ? `Yes` : `No`}</p>
                                    <a href={`/balls/${ball._id}/edit`}>Edit</a><br/>
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