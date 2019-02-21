import React, { Component } from 'react';
import Blog from '../components/Blog';
import { connect } from 'react-redux'
import {fetchBlogs, fetchBlog} from "../actions/portfolio";

class BlogContainer extends Component {

  componentDidMount() {
    console.log("hit CDM")
    this.props.fetchBlogs()
    // this.getBlogContents()

  }

  getBlogContents = () => {
    console.log("hit get Blog")
    const name = '2018-04-13-where_the_journey_begins.markdown'
    this.props.fetchBlog(name)
  }

  render() {
    
    return (
        <div className="BlogsContainer">
          <Blog blogs={this.props.blogs} blog={this.props.blog}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    blog: state.blog
  }
}

export default connect(mapStateToProps, {fetchBlogs, fetchBlog})(BlogContainer)