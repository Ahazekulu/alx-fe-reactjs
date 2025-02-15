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
