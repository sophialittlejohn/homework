import React, {Component} from 'react'
import './index.css'


class Result extends Component {
    render () {
        return (
            <div className='search-element' onKeyDown={(e) => this.props.keyPress(e)}>
                <div key={this.props.user.id}
                    className={this.props.active && this.props.active.login === this.props.user
                        ? `active search-results`
                        : 'search-results'}>
                    <a href={this.props.html_url}>
                        <img src={this.props.avatar} alt='avatar' className='search-avatar'/>
                        <div className='search-link'>{this.props.user}</div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Result