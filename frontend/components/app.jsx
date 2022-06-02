import React from 'react';
import SplashContainer from './splash/splash_container';
import UserIndexContainer from './user/user_index_container';
import AdminIndexContainer from './admin/admin_index_container'
import SearchContainer from './search/search_container';
import SearchPageContainer from './search/search_page_container'
import { Route, Routes, Link } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div className='app'>
    <header className='header-container'>
      <div className='header-inner-container'>
        <Link to='/' className='header-logo-container'>
          <img src={window.essexLogo} alt="essex-logo" className='header-logo' />
        </Link>
        <div className='user-auth-container'>
          User Auth Content here
        </div>
      </div>
      <SearchContainer />
    </header>
    <Routes>
      <Route exact path="/" element={<SplashContainer />}/>
      <Route exact path='/alumni' element={<UserIndexContainer />}/>
      <Route exact path='/admins' element={<AdminIndexContainer />}/>
      <Route exact path='/search/:searchTerm' element={<SearchPageContainer />}/>
    </Routes>
  </div>
);

{/* <Route path="/" component={NavBarContainer}/>
<Route exact path="/" component={Home} />
<AuthRoute path="/signup" component={SignupContainer} />
<AuthRoute path="/login" component={LoginContainer} />
<ProtectedRoute path="/chirps"  component={ChirpIndexContainer} /> */}