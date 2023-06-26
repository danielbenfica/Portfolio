import { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
function Profile() {
  const [dataProfile, setDataProfile] = useState([])

  useEffect(() => {

    const urlAPI = "https://api.github.com/users/MarceloBenfica"
    async function getDataProfile(){
      const response = await axios.get(urlAPI)
      setDataProfile(response.data)
    }
    
    getDataProfile()
  }, [])
  return (
    <div className="profile cards">
      <img src={dataProfile.avatar_url} alt="Profile phto" className='imageProfile'/>
      <p className='userName'>{dataProfile.name}</p>
      <p className='jobName'>Front-End Developer</p>
    </div>
  );
}

export default Profile;