const React = require('react');

class Index extends React.Component {
    render() {
        const { jerseys } = this.props;
        return (
            <div>
                <h1>Jerseys</h1>
                <nav>
                    <a href="/jerseys/new">Enter A New Jersey To Your Collection</a>
                </nav>
                <ul>
                    {
                        jerseys.map((jersey, index) => {
                            return (
                                <li>
                                    <a href={`/jerseys/${jersey._id}`}>{jersey.name}</a><br/>
                                    <p>Team: {jersey.team}</p><br/>
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