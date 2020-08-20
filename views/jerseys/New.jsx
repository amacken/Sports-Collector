const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Jersey Page</h1>
              <form action="/jerseys" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Team: <input type="text" name="team" /><br/>
                  Number: <input type="number" name="number" /><br/>
                  Purchase Price: <input type="number" name="purchasePrice" /><br/>
                  <input type="submit" name="" value="Create Jersey Entry"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;