const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        return (
            <Default>
                <h1>My Sports Collection</h1>
                <nav>
                    <a href={'/jerseys'}>Jerseys</a>
                    <a href={'/balls'}>Balls</a>
                    <a href={'/pictures'}>Pictures</a>
                    <a href={'/bobbleheads'}>Bobbleheads</a>
                    <a href={'/cards'}>Cards</a>
                    <a href={'/miscItems'}>Misc. Items</a>
                </nav>
            </Default>
        )
    }
}

module.exports = Index;