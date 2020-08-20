const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, team, number, hallOfFamer, purchasePrice } = this.props.jersey;
        return (
            <div>
                <h1>Edit Page</h1>
                <form action={`/jerseys/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} /><br/>
                    Team: <input type="text" name="team" defaultValue={team} /><br/>
                    Number: <input type="number" name="number" defaultValue={number} /><br/>
                    Hall of Famer: <input type="checkbox" name="hallOfFamer" checked={hallOfFamer} /><br/>
                    Purchase Price: <input type="number" name="purchasePrice" defaultValue={purchasePrice} /><br/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit;