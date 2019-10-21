import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Icon } from '@blueprintjs/core';
import StarRatings from 'react-star-ratings';
import Tag from './Tag';
import { Link } from 'react-router-dom';
export class TestItem extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    //console.log(this.props.home.listTest[0].description)
    // const {
    //   id,
    //   name,
    //   totalQuestions,
    //   totalViewRating,
    //   time,
    //   viewAccess,
    //   owner,
    //   createdAt,
    //   description,
    //   tag,
    //   avgRating,
    // } = this.props.test;
    // if (!id) return null;
    return (
      <div className="test-item">
        <div className="box-content">
          <div className="wrap-title">
            <div className="title-box">
              <Link
                to={`/${this.props.home.listTest[this.props.index].title}`}
                className="title"
                title={`${this.props.home.listTest[this.props.index].title}`}
                onClick={() =>
                  this.props.actions.selectTest(this.props.home.listTest[this.props.index].id)
                }
              >
                {this.props.home.listTest[this.props.index].title}
              </Link>
            </div>
            <div className="list-icon">
              <div className="icon">
                <a href="">
                  <Icon icon="search" color="rgb(131, 149, 167)" />
                </a>
                <a href="">
                  <Icon icon="add" color="rgb(131, 149, 167)" />
                </a>
                <a href="">
                  <Icon icon="bookmark" color="rgb(131, 149, 167)" />
                </a>
                <a href="">
                  <Icon icon="timeline-area-chart" color="rgb(131, 149, 167)" />
                </a>
                <a href="">
                  <Icon icon="share" color="rgb(131, 149, 167)" />
                </a>
              </div>
            </div>
          </div>

          <div className="info">
            <div className="info-or">
              <div className="wrap-rating">
                <StarRatings
                  rating={this.props.home.listTest[this.props.index].ratingAvg || 0}
                  starRatedColor="rgb(241, 196, 15)"
                  numberOfStars={5}
                  starDimension="16px"
                  starSpacing="0"
                />
                <span className="total-rating">
                  ({this.props.home.listTest[this.props.index].totalRatings || 0})
                </span>
              </div>
            </div>

            <div className="info-description">
              <p>{this.props.home.listTest[this.props.index].description}</p>
            </div>

            <div className="info-qtv-tag">
              <div className="qtv"></div>
              <div className="list-tag">
                {this.props.home.listTest[this.props.index].tags.map((val, ind) => {
                  <Tag>{}</Tag>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
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
)(TestItem);
