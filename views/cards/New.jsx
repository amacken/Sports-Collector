const React = require('react');
const Default = require('../components/Default')

class New extends React.Component {
    render() {
      return (
          <Default>
              <h1>New Card Page</h1>
              <form action="/cards" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Sport: <input type="text" name="sport" /><br/>
                  Team: <input type="text" name="team" /><br/>
                  Image: <input type="text" name="img" /><br/>
                  Number: <input type="number" name="number" /><br/>
                  Hall of Famer: <input type="checkbox" name="hallOfFamer" /><br/>
                  Purchase Price: <input type="number" name="purchasePrice" /><br/>
                  Certification Number: <input type="text" name="certificationNumber" /><br/>
                  <input type="submit" name="" value="Create Card Entry"/>
               </form>
          </Default>);
    }
  }
  
  module.exports = New;