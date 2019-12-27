import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {

        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className="tc">
                <div>
                    <h1 className="f1">Robot Friends</h1>
                </div>
                
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filterRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;