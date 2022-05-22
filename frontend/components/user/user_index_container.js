import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import UserIndex from './user_index_component'

const mSTP = (state) => {
    return {
        users: Object.values(state.users)
    }
}
const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(UserIndex)