import './App.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import ActivityList from './components/ActivityList';

const port = 3005

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [activities, setActivities] = useState([]);
  const [sortFunction, setSortFunction] = useState(1);

  const getSortFunction = (option) => {
    switch(option) {
      case 2: return (a, b) => b?.rating - a?.rating;
      case 3: return (a, b) => a?.title.localeCompare(b?.title);
      default: return (a, b) => a?.price - b?.price;
    }
  }

  async function searchActivities(queryString) {
    let fetchedActivities = []
    await fetch(`http://localhost:${port}/activities/${queryString}`)
      .then(response => response.json())
      .catch(err => console.error(err))
      .then(activitiesData => fetchedActivities = activitiesData);
    return fetchedActivities.sort(getSortFunction(sortFunction));
  }
  
  async function onSearchClick(event) {
    event.preventDefault()
    setActivities(await searchActivities(searchTerm));
  }

  async function onSearchInputChange(event) {
    event.preventDefault()
    setSearchTerm(event.target.value);
  }

  function pickSortOption(event, option) {
    event.preventDefault();
    setSortFunction(option);
    setActivities(activities.sort(getSortFunction(option)));
  }

  useEffect(() => {
    const initialiseActivities = async () => {
      setActivities(await searchActivities(''))
    }
    initialiseActivities().catch(err => console.error(err))
  }, [setActivities]);

  return (
    <div className="App">
      <h1>GYG Activity Search</h1>
      <div className='search-toolbar'>
        <SearchBar searchTerm={searchTerm} onSearchClick={onSearchClick} onSearchInputChange={onSearchInputChange}/>
        <SortDropdown pickSortOption={pickSortOption}/>
      </div>
      <ActivityList activities={activities}/>
    </div>
  );
}

export default App;
