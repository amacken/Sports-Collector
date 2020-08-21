const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        return (
            <Default>
                <h1>My Sports Collection</h1>
                <nav>
                    <a href={'/jerseys'}>Go To Your Jerseys Collection</a>
                    <a href={'/balls'}>Go To Your Balls Collection</a>
                    <a href={'/pictures'}>Go To Your Pictures Collection</a>
                </nav>
            </Default>
        )
    }
}

module.exports = Index;