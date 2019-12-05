import React from 'react';
import Catalog from './components/Catalog.jsx';

// removed Notes component since it's not being used
// import Notes from './components/Notes.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username:''
        }

        // must bind input change
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event){
        // console.log(event.target)

        this.setState({
            username: event.target.value
        })
    }

    render() {

        return (
            <div className="App" style={{padding: '2vw'}}>

                <h3>Enter your username to enter the catalog:</h3>

                <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />

                {this.state.username.length > 1 &&
                <Catalog
                    textSize="small"
                    age={5}
                />
                }

            </div>
        );
    }
}

export default App;