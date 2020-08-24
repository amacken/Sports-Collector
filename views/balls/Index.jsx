const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { balls } = this.props;
        return (
            <Default>
                <h1>My Ball Collection</h1>
                <nav>
                    <a href="/balls/new">Enter A New Ball To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/jerseys'}>Jerseys</a>
                    <a href={'/pictures'}>Pictures</a>
                    <a href={'/bobbleheads'}>Bobbleheads</a>
                    <a href={'/cards'}>Cards</a>
                    <a href={'/miscItems'}>Misc. Items</a>
                </nav>
                <ul>
                    {
                        balls.map((ball, index) => {
                            return (
                                <li>
                                    <a href={`/balls/${ball._id}`}>{ball.name}</a><br/>
                                    <br/>
                                    <img src={ball.img}></img>
                                    <a href={`/balls/${ball._id}/edit`}>Edit</a><br/>
                                    <br/>
                                    <form action={`/balls/${ball._id}?_method=DELETE`} method="POST">
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