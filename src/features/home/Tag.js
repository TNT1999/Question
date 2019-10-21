import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Tag extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { href, children } = this.props;
    return (
      <div className="tag">
        <a href={href}>{children}</a>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    boardTest: state.boardTest,
    home:state.home
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tag);
