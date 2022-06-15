import { useState } from 'react';

export default function SortDropdown({ pickSortOption }) {
    const [isShown, setIsShown] = useState(false);
  
    return (<div className="sort-dropdown" onMouseLeave={(event) => { event.preventDefault(); setIsShown(false); }}>
    <button onClick={(event) => { event.preventDefault(); setIsShown(true); }}
            onMouseEnter={(event) => { event.preventDefault(); setIsShown(true); }}
            className="sort-dropdown-icon">Sort by</button>
    {isShown && <div className="dropdown-content">
      <button className="dropdown-option" onClick={(event) => pickSortOption(event, 1)}>Price</button>
      <button className="dropdown-option" onClick={(event) => pickSortOption(event, 2)}>Rating</button>
      <button className="dropdown-option" onClick={(event) => pickSortOption(event, 3)}>Name</button>
    </div>}
    </div>)
  }