import { useState, useEffect } from "react"
import axios from "axios"

import "./style.css"

import CardProject from "./ComponentCardProject"

function MyProjects(props){
  const [repositorys, setRepositorys] = useState([])

  useEffect(() => {

    async function getRepository(){
      const urlAPI = props.urlApi + "repos"
      const response = await axios.get(urlAPI)
      setRepositorys(response.data)
    }

    try{
      getRepository()
    } catch(error){
      console.log(error)
    }

    
  }, [])


  return(
    <>

    <div className="rowProjects">
    <article className="firstColumnProjects">
    {repositorys.map((repository, index) => {
      if(index % 2 === 0){
        return (
            <CardProject repos={repository} />
          )
      }
    })}
    </article>
    <article className="secoundColumnProjects">
    {repositorys.map((repository, index) => {
      if(index % 2 !== 0){
        return (
            <CardProject repos={repository} />
          )
      }
    })}
    </article>
      

    
 
    </div>
    </>
  )
}
export default MyProjects