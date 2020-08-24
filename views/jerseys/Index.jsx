const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { jerseys } = this.props;
        return (
            <Default>
                <h1>My Jersey Collection</h1>
                <nav>
                    <a href="/jerseys/new">Enter A New Jersey To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/balls'}>Balls</a>
                    <a href={'/pictures'}>Pictures</a>
                    <a href={'/bobbleheads'}>Bobbleheads</a>
                    <a href={'/cards'}>Cards</a>
                    <a href={'/miscItems'}>Misc. Items</a>
                </nav>
                <ul>
                    {
                        jerseys.map((jersey, index) => {
                            return (
                                <li>
                                    <a href={`/jerseys/${jersey._id}`}>{jersey.name}</a><br/>
                                    <p>Sport: {jersey.sport}</p>
                                    <p>Team: {jersey.team}</p>
                                    <img src={jersey.img}></img>
                                    <a href={`/jerseys/${jersey._id}/edit`}>Edit</a><br/>
                                    <br/>
                                    <form action={`/jerseys/${jersey._id}?_method=DELETE`} method="POST">
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