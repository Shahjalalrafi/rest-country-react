// import React, { Component } from 'react';
import React from 'react';
import Bio from './Bio';
import './profile.css'
import Skills from './Skills';
import Social from './Social';

const Profile = () => {
    return (
        <div>
            <div className='contain'>
                  <Bio></Bio>
                  <Skills></Skills>
                  <Social></Social>
            </div>
        </div>
    );
};

export default Profile;