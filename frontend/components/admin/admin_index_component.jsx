import React from 'react';

class AdminIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
}

export default AdminIndex