const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { bobbleheads } = this.props;
        return (
            <Default>
                <h1>My Bobblehead Collection</h1>
                <nav>
                    <a href="/bobbleheads/new">Enter A New Bobblehead To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/jerseys'}>Go To Your Jerseys Collection</a>
                    <a href={'/balls'}>Go To Your Balls Collection</a>
                    <a href={'/pictures'}>Go To Your Pictures Collection</a>
                </nav>
                <ul>
                    {
                        bobbleheads.map((bobblehead, index) => {
                            return (
                                <li>
                                    <a href={`/bobbleheads/${bobblehead._id}`}>{bobblehead.name}</a><br/>
                                    <p>Sport: {bobblehead.sport}</p>
                                    <p>Team: {bobblehead.team}</p>
                                    <img src={bobblehead.img}></img>
                                    <p>Hall of Famer: {bobblehead.hallOfFamer ? `Yes` : `No`}</p>
                                    <a href={`/bobbleheads/${bobblehead._id}/edit`}>Edit</a><br/>
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