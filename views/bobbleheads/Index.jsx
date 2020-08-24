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
                    <a href={'/jerseys'}>Jerseys</a>
                    <a href={'/balls'}>Balls</a>
                    <a href={'/pictures'}>Pictures</a>
                    <a href={'/cards'}>Cards</a>
                    <a href={'/miscItems'}>Misc. Items</a>
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
                                    <br/><br/>
                                    <a href={`/bobbleheads/${bobblehead._id}/edit`}>Edit</a><br/>
                                    <br/>
                                    <form action={`/bobbleheads/${bobblehead._id}?_method=DELETE`} method="POST">
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