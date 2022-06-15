export default function SearchBar({searchTerm, onSearchInputChange, onSearchClick}) {
    return (<div className='search-bar'>
            <form>
            <input className='search-box' type='text'
                 onChange={(event) => { onSearchInputChange(event) }}
                 value={searchTerm}/>
            <button className='search-button' type='submit' onClick={async (event) => await onSearchClick(event)}>🔍</button>
            </form>
          </div>);
  }