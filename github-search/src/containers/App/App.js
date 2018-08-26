import React, {Component} from 'react';
import './index.css';
import {connect} from "react-redux";
import {fetchUsers} from "../../store/helpers/helpers";
import SearchResult from "../../components/SearchResult";
import puppies from "../../assets/images/puppies.jpeg"
import kittenAndPuppy from "../../assets/images/kitten_puppy.jpg"
import kittens from "../../assets/images/kittens.jpg"


class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            search: '',
            activeIndex: 0,
            error: null
        }
    }

    componentWillMount () {
        document.addEventListener("keydown", this.handleArrowPress);
    }

    componentWillUnmount () {
        document.removeEventListener("keydown", this.handleArrowPress);
    }

    componentWillReceiveProps () {
        if (this.props.data.users) {
            this.setState({
                active: this.props.data.users[this.state.activeIndex],
            })
        }
        if (this.props.data.error) {
            this.setState({error: this.props.data.error})
        }
    }

    handleInput = (e) => {
        this.setState({search: e.currentTarget.value}, () => this.props.dispatch(fetchUsers(this.state.search)))
    }

    handleUserClick = event => {
        const clickedUser = this.props.data.users.find(user => user.login === event.currentTarget.innerHTML)
        window.location = clickedUser.html_url
    }

    handleEnterPress = event => {
        if (event.key === 'Enter' && this.props.data.users) {
            window.location = this.props.data.users[this.state.activeIndex].html_url;
        }
    }

    handleArrowPress = event => {
        let index = this.state.activeIndex
        if (this.props.data.users && index <= this.props.data.users.length - 1) {
            if (event.key === 'ArrowDown') {
                this.setState({activeIndex: index + 1})
            }
            if (event.key === 'ArrowUp' && index > 0) {
                this.setState({activeIndex: index - 1})
            }
        }
    }

    render () {
        return (
            <div className="container">
                <h1>Sophia's Github User Search</h1>
                <div className='search-container'>
                    <input type='text'
                           placeholder='Search Github Users...'
                           className='search-input'
                           onChange={this.handleInput}
                           onKeyDown={(e) => this.handleEnterPress(e)}
                           value={this.state.search}
                    />
                    <div className='search'>
                        {this.props.data.users && this.state.search ?
                            this.props.data.users.map(user => {
                                return <SearchResult
                                    key={user.id}
                                    user={user.login}
                                    avatar={user.avatar_url}
                                    html_url={user.html_url}
                                    active={this.props.data.users[this.state.activeIndex]}
                                    handleUserClick={(e) => this.handleUserClick(e)}
                                />
                            }) : null}
                    </div>
                    {this.props.data.error && !this.props.data.users ? <div className='error'>Error! Please try again.</div> : null}
                </div>
                <div className='placeholder'>
                    <h2>Here are some adorable puppies and kittens!</h2>
                    <div>
                        <img src={puppies} alt='puppies-placeholder' />
                        <img src={kittenAndPuppy} alt='pup-kit-placeholder' />
                        <img src={kittens} alt='kittens-placeholder' />
                    </div>
                </div>
                <div className='placeholder'>
                    <h2>Placeholder 2</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        data: state
    })
}

export default connect(mapStateToProps)(App);
