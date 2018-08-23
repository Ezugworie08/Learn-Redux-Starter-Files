import React from 'react';
import { Link } from 'react-router';

// User defined components
import Photo from './Photo';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo key={i} i={i} post={post} {...this.props} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
