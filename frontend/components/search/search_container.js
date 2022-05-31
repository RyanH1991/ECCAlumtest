import { connect } from 'react-redux';
import Search from './search_component_test';
import { searchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
    searchUsers: (keyword) => dispatch(searchUsers(keyword))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);