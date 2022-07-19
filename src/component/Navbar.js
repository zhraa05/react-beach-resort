import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isopne: false
    }
    handeltogle = () => {
        this.setState({ isopne: !this.state.isopne })
    }
    render() {
        return (
            <nav className='navbar' >
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} />
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handeltogle} >
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>

                    <ul className={this.state.isopne ? "nav-links show-nav" : 'nav-links'}>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>rooms</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}
