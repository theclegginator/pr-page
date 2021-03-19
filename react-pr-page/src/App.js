import { useState, useEffect } from 'react'
import PullRequestRow from './components/PullRequestRow.js'
import Header from './components/Header.js'
import Search from './components/Search.js'
import Pagination from './components/Pagination.js'

function App() {
  // initialize state as empty, but then we'll pass in data from JSONplaceholder
  const [pullRequests, setPRs] = useState([]);
  const [searchTerm, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPRs = () => {
      // currently passing in empty array for useEffect() so we get the componentDidMount behavior to initialize a fetch upon app load
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => {
            json = json.slice(0, 50); // shorten return to only 50 PRs.
            // add a random number to each for display purposes only (e.g. [PROD-*])
            json.forEach(function (element) {
              element.randomNum = Math.floor(Math.random()*5000);
            })
            // update the pullRequest state with the response
            setPRs(json);
            setLoading(false);
          }
        );
    }

    fetchPRs();
  }, [])

  const handleSearch = (currentSearch) => {
    setSearch(currentSearch);
  }

  const searchEngine = (prName) => {
    // this function looks for matches on the input string from the search bar on the PR name
    // this gets passed as a boolean valueto the PR row to determine whether or not we should display that row.
    // prevent match on blank string which always returns true
    return searchTerm ? prName.toLowerCase().indexOf(searchTerm) > -1 : false;
  }

  // update the page number shown
  const updatePage = (pageNum) => {
    setCurrentPage(pageNum);
  }

  // pagination variables;
  const postsPerPage = 10;
  const lastPostIndex = postsPerPage * currentPage; // last index determined by page num * page posts (page num is in state)
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentlyDisplayedPRs = pullRequests.slice(firstPostIndex, lastPostIndex);
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Search handleSearch={handleSearch} />
        {/*load a 'is loading' banner until we get data from the 'server' */}
        {isLoading && <h2 className="loading">⌛ Loading Pull Requests... ⌛</h2>}
        <div>
          {/* currentlyDisplayedPRs is a paginated subsection of ALL PRs, 'pullRequests' from App state */}
          {
            currentlyDisplayedPRs.map((pr) => (
              <PullRequestRow 
                key={pr.id} 
                pr={pr} 
                randomNum={pr.randomNum} 
                rowIsVisible={searchEngine(pr.name)}
                searchTerm={searchTerm}
              />
            ))
          }
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={pullRequests.length} updatePage={updatePage} />
      </div>
    </div>
  );
}

export default App;
