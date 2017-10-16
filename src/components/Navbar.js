import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import signOut from '../actions/user/sign-out'
import { Link } from 'react-router'

class Navbar extends PureComponent {


  // signOut(event) {
  //   event.preventDefault()
  //   this.props.signOut()
  // }

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={'/'} className="nav-item nav-link active" >StageFinder <span className="sr-only">(current)</span></Link>
            <Link to={'/stages'} className='stages'>all stages</Link>
            <Link to={'/artists'} className='artists'>all artists</Link>
            <Link to={'/inspirations'} className='inspirations'>inspirations</Link>

            <Link to={'/sign-out'}>Sign out</Link>
          </div>
        </div>
      </nav>
    )
  }
}





export default Navbar;
