import React from 'react';
import UserIndexContainer from './user/user_index_container';
import { Route, Routes } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_util';

console.log(UserIndexContainer)

export default () => (
  <div className='app'>
    <Routes>
      <Route exact path='/banana' element={<UserIndexContainer />}/>
    </Routes>
  </div>
);

{/* <Route path="/" component={NavBarContainer}/>
<Route exact path="/" component={Home} />
<AuthRoute path="/signup" component={SignupContainer} />
<AuthRoute path="/login" component={LoginContainer} />
<ProtectedRoute path="/chirps"  component={ChirpIndexContainer} /> */}