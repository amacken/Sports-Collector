const React = require('react');
const Default = require('../components/Default')

class New extends React.Component {
    render() {
      return (
          <Default>
              <h1>New Ball Page</h1>
              <form action="/balls" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Image: <input type="text" name="img" /><br/>
                  Sport: <input type="text" name="sport" /><br/>
                  Hall of Famer: <input type="checkbox" name="hallOfFamer" /><br/>
                  Purchase Price: <input type="number" name="purchasePrice" /><br/>
                  Certification Number: <input type="text" name="certificationNumber" /><br/>
                  <input type="submit" name="" value="Create Ball Entry"/>
               </form>
          </Default>);
    }
  }
  
  module.exports = New;