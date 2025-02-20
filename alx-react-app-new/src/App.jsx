import React from 'react';
import WelcomeMessage from './WelcomeMessage'; // Import the WelcomeMessage component

function App() {
  return (
    <div>
      <WelcomeMessage /> {/* Render the WelcomeMessage component */}
    </div>
  );
}

export default App;



import React from 'react';
import Header from './Header'; // Import the Header component
import MainContent from './MainContent'; // Import the MainContent component
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <MainContent /> {/* Include the MainContent component */}
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;



import React from 'react';
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
  return (
    <div>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
  );
}

export default App;



// src/App.jsx
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App;
