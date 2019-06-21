const React = require('react');


class App extends React.Component {
    render() {
        return (<h2>
            {this.props.name}
        </h2>);
    }
}