import star from "../../../assets/image/assets/star.svg"
import folder from "../../../assets/image/assets/folder.svg"
import gitBranch from "../../../assets/image/assets/git-branch.svg"

function CardProject({ repos }){
  const colorsLanguage = {
    "JavaScript": "#f1e05a",
    "Python": "#3572A5",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "PHP": "#4F5D95",
    "C++": "#4F5D95",
    "Dart": "#00B4AB",
    "TypeScript": "#3178c6" 
  }


  return(
    <article className="boxProjects">
      <a href={repos.html_url} className="">
        <header className="headerProjects">
          <img src={folder} alt="Folder" />
          <strong className="nameProjects">{repos.name}</strong>
        </header>
      </a>
      <section className="sectionProjects">
        <p className="descriptionProjects">{repos.description}</p>
      </section>
      <footer className="footerProjects">

        <div className="viewsProjects">
          <a href={repos.html_url+"/stargazers"} >
            <div className="boxStarGazers">
              <img src={star} alt="Star" className="iconsProjects"/>
              <p className="starCount">{repos.stargazers_count}</p>
            </div>
          </a>
          <a href={repos.html_url+"/forks"} >
          <div className="boxGitBranch">
            <img src={gitBranch} alt="GitBranch" className="iconsProjects"/>
            <p className="watchersCount">{repos.watchers_count}</p>
          </div>
          </a>
        </div>
        <div className="languageProjects">
            <div className="circleLanguage" style={{backgroundColor: colorsLanguage[repos.language] }}></div>
            <p className="nameLanguage">{repos.language}</p>
          </div>
      </footer>
      </article>
  )
}
export default CardProject;