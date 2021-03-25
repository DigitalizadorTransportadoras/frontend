import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import { getLogin } from '../../api/login'
import { getToken } from '../../util/localStorage'


const noAuth = Component => {
  class ComponentNoAuth extends React.Component {

    componentDidMount() {
      const { authorized, history } = this.props
      getLogin()
      if (authorized) history.replace("/");
    }

    componentDidUpdate(prevProps) {
      const { authorized, history } = prevProps;
      if (!authorized && this.props.authorized && getToken()) {
        history.replace("/");
      }
    }

    render() {
      return (
        <div>
          <Component {...this.props} />
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    authorized: state.authorized,
    user: state.user
  });
  return connect(mapStateToProps, actions)(ComponentNoAuth);
}

export default noAuth;