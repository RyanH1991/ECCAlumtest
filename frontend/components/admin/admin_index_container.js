import { connect } from 'react-redux';
import { fetchAdmins } from '../../actions/admin_actions';
import AdminIndex from './admin_index_component'

const mSTP = (state) => {
    return {
        admins: Object.values(state.admins)
    }
}
const mDTP = (dispatch) => ({
    fetchAdmins: () => dispatch(fetchAdmins())
})

export default connect(mSTP, mDTP)(AdminIndex)