import React from 'react';
import Practice from './components/Practice.jsx';

// removed Notes since it's not being used
// import Notes from './components/Notes.jsx';

function App() {
    return (
        <div className="App" style={{padding: '2vw'}}>

            <Practice
                textSize="big"
                age={5}
            />

        </div>
    );
}

export default App;