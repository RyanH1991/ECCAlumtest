import React from 'react';
import UserIndexContainer from './user/user_index_container';
import AdminIndexContainer from './admin/admin_index_container'
import SearchContainer from './search/search_container';
import SearchPageContainer from './search/search_page_container'
import { Route, Routes } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div className='app'>
    <header>
      <SearchContainer />
    </header>
    <Routes>
      <Route exact path='/banana' element={<UserIndexContainer />}/>
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