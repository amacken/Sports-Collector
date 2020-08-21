const React = require('react');
const Default = require('../components/Default')

class Edit extends React.Component {
    render() {
        const { _id, name, sport, img, hallOfFamer, purchasePrice, certificationNumber } = this.props.ball;
        return (
            <Default>
                <h1>Edit Page</h1>
                <form action={`/balls/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name} /><br/>
                    Image: <input type="text" name="img" defaultValue={img} /><br/>
                    Sport: <input type="text" name="sport" defaultValue={sport} /><br/>
                    Hall of Famer: <input type="checkbox" name="hallOfFamer" checked={hallOfFamer} /><br/>
                    Purchase Price: <input type="number" name="purchasePrice" defaultValue={purchasePrice} /><br/>
                    Certification Number: <input type="text" name="certificationNumber" defaultValue={certificationNumber} /><br/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;