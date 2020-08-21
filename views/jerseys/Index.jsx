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
                    <a href={'/balls'}>Go to Your Balls Collection</a>
                </nav>
                <ul>
                    {
                        jerseys.map((jersey, index) => {
                            return (
                                <li>
                                    <a href={`/jerseys/${jersey._id}`}>{jersey.name}</a><br/>
                                    <p>Team: {jersey.team}</p>
                                    <img src={jersey.img}></img>
                                    <p>Hall of Famer: {jersey.hallOfFamer ? `Yes` : `No`}</p>
                                    <p>Item is framed: {jersey.isFramed ? `Yes` : `No`}</p>
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