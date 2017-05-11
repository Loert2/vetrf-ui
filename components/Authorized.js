import { Component } from 'react';
import { connect } from 'react-redux';
//todo: а нужен ли?
class Authorized extends Component {
    constructor(props, context) {
        super(props, context);

        this.hasAuth = this.hasAuth.bind(this);
        this.hasAuthority = this.hasAuthority.bind(this);
        this.hasAnyAuthority = this.hasAnyAuthority.bind(this);
        this.hasNotAuthority = this.hasNotAuthority.bind(this);
    }

    hasAuth(auth) {
        if (!this.props.currentUser ||
            !this.props.currentUser.authorities ||
            this.props.currentUser.authorities.length === 0) {
            return false;
        }
        const result = this.props.currentUser.authorities.filter(function (item) {
            return auth === item.name;
        });
        return !!result;
    };

    hasAuthority(hasAuthority = []) {
        return hasAuthority.every(this.hasAuth) || hasAuthority.length === 0;
    }

    hasAnyAuthority(hasAnyAuthority = []) {
        return hasAnyAuthority.some(this.hasAuth) || hasAnyAuthority.length === 0;
    }

    hasNotAuthority(hasNotAuthority = []) {
        return !hasNotAuthority.some(this.hasAuth) || hasNotAuthority.length === 0;
    }

    render() {
        return (
            (this.hasAuthority(this.props.hasAuthority) &&
            this.hasAnyAuthority(this.props.hasAnyAuthority) &&
            this.hasNotAuthority(this.props.hasNotAuthority)) ?
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

export default connect(mapStateToProps)(Authorized);
