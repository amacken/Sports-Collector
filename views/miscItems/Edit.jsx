const React = require('react');
const Default = require('../components/Default')

class Edit extends React.Component {
    render() {
        const { _id, name, description, img, sport, team, number, hallOfFamer, purchasePrice, isFramed, certificationNumber } = this.props.miscItem;
        return (
            <Default>
                <h1>Edit {name} Item</h1>
                <form action={`/miscItems/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} /><br/>
                    Item Description: <input type="textarea" name="description" defaultValue={description} /><br/>
                    Image: <input type="text" name="img" defaultValue={img} /><br/>
                    Sport: <input type="text" name="sport" defaultValue={sport} /><br/>
                    Team: <input type="text" name="team" defaultValue={team} /><br/>
                    Number: <input type="number" name="number" defaultValue={number} /><br/>
                    Hall of Famer: <input type="checkbox" name="hallOfFamer" checked={hallOfFamer} /><br/>
                    Purchase Price: <input type="number" name="purchasePrice" defaultValue={purchasePrice} /><br/>
                    Framed: <input type="checkbox" name="isFramed" checked={isFramed} /><br/>
                    Certification Number: <input type="text" name="certificationNumber" defaultValue={certificationNumber} /><br/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;