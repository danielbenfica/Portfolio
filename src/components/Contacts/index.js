import { useEffect, useState } from 'react'
import axios from 'axios'

import './style.css'

import mapPin from '../../assets/image/assets/map-pin.svg'
import briefcase from '../../assets/image/assets/briefcase.svg'
import gitHub from '../../assets/image/assets/github.svg'
import linkedin from '../../assets/image/assets/linkedin.svg'
import twitter from '../../assets/image/assets/twitter.svg'
import globe from '../../assets/image/assets/globe.svg'
import mail from '../../assets/image/assets/mail.svg'

function Contacts() {
  const [dataContacts, setDataContacts] = useState([])

  useEffect(() => {

    const urlAPI = "https://api.github.com/users/MarceloBenfica"
    async function getDataProfile(){
      const response = await axios.get(urlAPI)
      setDataContacts(response.data)
    }
    
    getDataProfile()
  }, [])

  return (
    <article className="contacts cards">
      <ul>
        {dataContacts.location? <li><img src={mapPin} alt="map pin" />{dataContacts.location}</li> : "" }

        {dataContacts.company? <li><img src={briefcase} alt="briefcase" />{dataContacts.company}</li> : ""}

        {dataContacts.login?<li><a href={"https://github.com/"+dataContacts.login} ><img src={gitHub} alt="GitHub" target="_blank"/>{dataContacts.login}</a></li> : ""}

        {dataContacts.name?<li><img src={linkedin} alt="" />daniel-oliveira-benfica</li> : ""}

        {dataContacts.twitter_username?<li><a href={"https://twitter.com/"+dataContacts.twitter_username}><img src={twitter} alt="" />{dataContacts.twitter_username}</a></li> : ""}

        {dataContacts.blog?<li><a href={dataContacts.blog}><img src={globe} alt="" />{dataContacts.blog}</a></li> : ""}

        {dataContacts.email?<li><img src={mail} alt="" /></li> : ""}
      </ul>
    </article>
  );
}

export default Contacts;