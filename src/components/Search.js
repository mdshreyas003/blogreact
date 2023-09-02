import React from 'react'

function Search({setSearch, searchPosts, fetchPosts}) {
  return (
    <div className='mb-4 flex-col flex space-y-3 text-left px-8 py-2 right-0  xl:fixed'>
        <form onSubmit={searchPosts} className="">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="@Company:_ or @Role:_"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-blue-600">
            Search
          </button>
          
        </form>
        {/* <button
            className="bg-green-400 text-white font-semibold py-2 px-4 rounded-lg ml-2 hover:bg-blue-600"
            onClick={fetchPosts}
          >
            See All Posts
          </button> */}
          </div>
  )
}

export default Search