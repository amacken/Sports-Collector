const React = require('react');
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { pictures } = this.props;
        return (
            <Default>
                <h1>My Picture Collection</h1>
                <nav>
                    <a href="/pictures/new">Enter A New Picture To Your Collection</a>
                    <a href={'/'}>Home</a>
                    <a href={'/jerseys'}>Jerseys</a>
                    <a href={'/balls'}>Balls</a>
                    <a href={'/bobbleheads'}>Bobbleheads</a>
                    <a href={'/cards'}>Cards</a>
                    <a href={'/miscItems'}>Misc. Items</a>
                </nav>
                <ul>
                    {
                        pictures.map((picture, index) => {
                            return (
                                <li>
                                    <a href={`/pictures/${picture._id}`}>{picture.name}</a><br/>
                                    <p>Team: {picture.team}</p>
                                    <img src={picture.img}></img>
                                    <a href={`/pictures/${picture._id}/edit`}>Edit</a><br/>
                                    <br/>
                                    <form action={`/pictures/${picture._id}?_method=DELETE`} method="POST">
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