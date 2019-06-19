import React, {Component} from 'react'
import {
    MDBNavbar,
    MDBFormInline,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBIcon,
    MDBDropdownItem
} from 'mdbreact'
import Login from './modals/Login'

class TopNavigation extends Component {
    state = {
        modal: false,
        searchVal: ''
    }

    toggle = () => {
        console.log("called")
        this.setState({
            modal: !this.state.modal
        });
    }

    courseSearch = event => {
        event.preventDefault()
        event.stopPropagation()
        if (this.state.searchVal) {
            window.location = '/courses/search?name=' + this.state.searchVal
        }
    }

    render() {
        return (
            <>
                <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                    <MDBNavbarToggler onClick={this.onClick}/>
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/about">About</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/contact">Contact</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline waves onSubmit={this.courseSearch}>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search courses"
                                               aria-label="Search courses"
                                               onChange={(e) => this.setState({searchVal: e.target.value})}/>
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a className="border border-light rounded mr-1 nav-link Ripple-parent" href="/register">Sign
                                    up</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a className="border border-light rounded mr-1 nav-link Ripple-parent" href="#!"
                                   onClick={() => this.toggle()}>Log in</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user"/>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic right>
                                        <MDBDropdownItem href="#!">Account settings</MDBDropdownItem>
                                        <MDBDropdownItem divider/>
                                        <MDBDropdownItem href="#!">Sign out</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <Login
                    modal={this.state.modal}
                    toggle={this.toggle}
                />
            </>
        );
    }
}

export default TopNavigation;