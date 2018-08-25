import React, {Component} from 'react';
import './index.css';
import {connect} from "react-redux";
import {fetchUsers} from "../store/helpers";
import Result from "../Result";
import {withRouter} from "react-router";


class App extends Component {
    // if arrow key is pressed set index to index+1 / index-1
    // figure out how to clear component when search.length === 0
    // componentWillReceiveProps the search was up to date, but ended up exceed max request
    // shouldComponentUpdate search is always a letter behind :/ same with using handleInput

    constructor (props) {
        super(props)

        this.state = {
            search: '',
            active: null,
            index: 0,
            users: []
        }
    }

    handleInput = (e) => {
        this.setState({search: e.currentTarget.value}, this.handleSearch())
        //this.props.dispatch(fetchUsers(this.state.search))
    }

    handleSearch () {
        this.props.dispatch(fetchUsers(this.state.search))
    }

    componentWillReceiveProps () {
        console.log('componentWillReceiveProps')
        if (this.props.users.users) {
            this.setState({
                active: this.props.users.users[this.state.index],
                users: this.props.users.users,
            })
        }
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('shouldComponentUpdate', nextState)
    //     console.log('shouldComponentUpdate', this.state.search)
    //     if (nextState.search !== this.state.search) {
    //         console.log('here')
    //         this.props.dispatch(fetchUsers(nextState.search))
    //         return true
    //     }
    //     return false
    // }

    handleKeyPress = (event, userHTML) => {
        console.log(event)
        if (event.key === 'ArrowDown') {
            console.log('ArrowDown press here! ')
            const index = this.state.index
            if (index >= this.state.users.length) {
                this.setState({index: index + 1})
            }
        }
        if (event.key === 'ArrowUp') {
            console.log('ArrowUp press here! ')
            const index = this.state.index
            if (index > 0) {
                this.setState({index: index - 1})
            }
        }
        // if (event.key === 'Enter') {
        //     console.log('Enter press here! ')
        //     this.props.history.push(`${userHTML}`)
        // }
    }

    render () {
        // console.log('active', this.state.active)
        return (
            <div className="container">
                <div className='search'>
                    <div className='search-element'>
                        <input type='text'
                               placeholder='Search Github Users...'
                               className='search-input'
                               onChange={this.handleInput}
                               onKeyDown={(e) => this.handleKeyPress(e)}
                               value={this.state.search}/>
                    </div>
                    <div className='search-container'>
                        {this.state.users ?
                            this.state.users.map(user => {
                                return <Result
                                    key={user.id}
                                    user={user.login}
                                    avatar={user.avatar_url}
                                    html_url={user.html_url}
                                    active={this.state.active}
                                    keyPress={e => this.handleKeyPress(e, user.html_url)}
                                />
                            }) : null}
                    </div>
                </div>
                <div className='placeholder'>
                    <h1>I am a placeholder</h1>
                </div>
                <div className='placeholder'>
                    <h1>I should stay where I am when the search is performed</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        users: state
    })
}

export default connect(mapStateToProps)(App);
