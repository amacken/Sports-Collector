const React = require('react');
const Default = require('../components/Default')

class New extends React.Component {
    render() {
      return (
          <Default>
              <h1>New Jersey Page</h1>
              <form action="/jerseys" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Team: <input type="text" name="team" /><br/>
                  Number: <input type="number" name="number" /><br/>
                  Hall of Famer: <input type="checkbox" name="hallOfFamer" /><br/>
                  Purchase Price: <input type="number" name="purchasePrice" /><br/>
                  <input type="submit" name="" value="Create Jersey Entry"/>
               </form>
          </Default>);
    }
  }
  
  module.exports = New;