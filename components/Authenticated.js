import { Component } from 'react';
import { connect } from 'react-redux';
//todo: а нужен ли?
class Authenticated extends Component {
    constructor(props, context) {
        super(props, context);
        const {
            isAuthenticated = true
        } = props;

        this.state = {
            isAuthenticated: isAuthenticated === !!props.currentUser.login,
            currentUser: props.currentUser
        };
    }

    render () {
        return (
            this.props.isAuthenticated === !!this.props.currentUser.login?
                this.props.children
                :
                false
        )
    }
}

const mapStateToProps = (state) => {
   return {
      currentUser: state.home.authentication.currentUser
   };
};

export default connect(mapStateToProps)(Authenticated);
