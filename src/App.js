import React from 'react'
import CardList from './CardList'
import { robots } from './robots'

const App = () => {
    return(
        <div>
            <div>
                <h1>Robot Friends</h1>
            </div>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    ) 
}

export default App;