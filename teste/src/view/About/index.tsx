import React from 'react';
import { Link } from 'react-router-dom';

//import { Container } from './styles';

const About: React.FC = () => {
  return (<div className="app_wrapper">
    <header>
      <ul className='menu'>
        <li><Link to="/">Listar</Link></li>
        <li><Link to="/buscar">Buscar</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </header>
    <h1>Sobre esse projeto</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure quam odit accusamus officia tenetur molestias assumenda, dicta ex provident accusantium ea iste laboriosam at, sequi possimus. Officiis, neque odit!
    </p>
    <hr></hr>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat..</p>
    <hr></hr>
  </div>);

}

export default About;