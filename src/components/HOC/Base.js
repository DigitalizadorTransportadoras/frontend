import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import { getLogin } from "../../api/login";

const base = Component => {
  class ComponentBase extends React.Component {

    componentDidMount() {
      getLogin();
      const { authorized, history, user } = this.props;
      if (!authorized && !user) history.replace("/login");
    }

    componentDidUpdate(prevProps) {
      const { history } = this.props;
      if (!this.props.authorized || !this.props.user) {
        history.replace("/login");
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
  return connect(mapStateToProps, actions)(ComponentBase);
}

export default base;