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
            </div>
        )
    }
}

module.exports = Index;