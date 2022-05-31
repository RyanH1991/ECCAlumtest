import { connect } from 'react-redux';
import SearchPage from './search_page_component'
import { searchUsers } from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.users)
    }
}

const mapDispatchToProps = dispatch => ({
    searchUsers: (keyword) => dispatch(searchUsers(keyword))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchPage);