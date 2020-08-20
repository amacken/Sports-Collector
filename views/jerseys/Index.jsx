const React = require('react');

class Index extends React.Component {
    render() {
        const { jerseys } = this.props;
        return (
            <div>
                <h1>My Jersey Collection</h1>
                <nav>
                    <a href="/jerseys/new">Enter A New Jersey To Your Collection</a>
                </nav>
                <ul>
                    {
                        jerseys.map((jersey, index) => {
                            return (
                                <li>
                                    <a href={`/jerseys/${jersey._id}`}>{jersey.name}</a><br/>
                                    <p>Team: {jersey.team}</p>
                                    <p>Hall of Famer: {jersey.hallOfFamer ? `Yes` : `No`}</p>
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
            </div>
        )
    }
}

module.exports = Index;