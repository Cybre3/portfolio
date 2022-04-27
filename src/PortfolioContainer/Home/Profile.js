import React from 'react';

function Profile(props) {
  return (
    <div className='profile-container'>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href='#'>
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href='#'>
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href='#'>
              <i className="fa fa-instagram"></i>
            </a>
            <a href='#'>
              <i className="fa fa-youtube-sqaure"></i>
            </a>
            <a href='#'>
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;