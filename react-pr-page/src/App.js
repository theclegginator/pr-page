import { useState, useEffect } from 'react'
import PullRequestRow from './components/PullRequestRow.js'
import Header from './components/Header.js'
import Search from './components/Search.js'

function App() {
  // initialize state as empty, but then we'll pass in data from JSONplaceholder
  const [pullRequests, setPRs] = useState([]);

  useEffect(() => {
    // currently passing in empty array so we get the componentDidMount behavior to initialize a fetch upon app load
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => {
          // update the pullRequest state with the response
          setPRs(json);
        }
      );
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Search />
        {
          pullRequests.map((pr) => (
            <PullRequestRow key={pr.id} pr={pr} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
