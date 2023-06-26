import './style.css'

function Tecnologys() {
  return (
    <article className='tecnologys cards'>
      <h2 className='titleTecnologys'>Tecnologys</h2>
      <div className='tagsTecnologys'>
        <div className="row">
          <p className='tecnology'>JAVASCRIPT</p>
          <p className='tecnology'>REACTJS</p>
          <p className='tecnology'>NODEJS</p>
        </div>
        <div className="row">
          <p className='tecnology'>CSS</p>
          <p className='tecnology'>HTML</p>
        </div>
      </div>
    </article>
    
  );
}

export default Tecnologys;
