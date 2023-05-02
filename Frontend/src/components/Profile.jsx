
import React, { useContext, useEffect } from 'react'
import IndexLayout from './layouts'
import { UserContext } from '../context/UserContext'
import Footer from './layouts/Footer'
import './styles.css'
import Content from './Content'

const Profile = () => {

  const content = <div>

</div>;
  return (
    <div>
      <IndexLayout render={content} />
      <Content />
      <Footer />
     
    </div>
  );
};

export default Profile;
