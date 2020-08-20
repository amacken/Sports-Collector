const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href='/css/app.css'/>
                    <title>Sports Collector</title>
                </head>
                <body>
                    {this.props.children}
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;