import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import TestItem from './TestItem';

export class ListTest extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (this.props.home.listTest.length === 0) {
      this.props.actions.loadTest(this.props.home.page);
    }
    window.addEventListener('scroll', this.handle);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handle);
  }

  handle = () => {
    if (
      window.scrollY + window.innerHeight ===
      this.refs.myscroll.clientHeight + this.refs.myscroll.offsetTop
    ) {
      this.props.actions.loadTest(this.props.home.page+1);
    }
  };

  render() {
    return (
      <div id="home-list-test" ref="myscroll">
        {this.props.home.listTest.map((val, ind) => {
          return <TestItem key={ind} index={ind} />;
        })}
        jdfjdjlds
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    boardTest: state.boardTest,
    home: state.home,
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
)(ListTest);
