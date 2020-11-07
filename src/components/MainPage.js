import React, { Component } from 'react';
import CardList from './CardList';
import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './MainPage.css'

class MainPage extends Component {
    componentDidMount() {
        console.log('NODE_ENV', process.env.NODE_ENV);
        console.log('NODE_ENV', process.env.REACT_APP_SAY_HI);
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, isPending } = this.props;

        return (isPending)
            ? <h1 className='tc'> Loading </h1>
            : (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default MainPage;