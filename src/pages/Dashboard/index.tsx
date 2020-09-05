import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/37147786?s=460&u=b168ecbb640860b13ea75b734ab879f013c74d27&v=4"
            alt="Gabriel Araujo"
          />
          <div>
            <strong>Node and Ts</strong>
            <p>Aplicando conceitos de Node.js com Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/37147786?s=460&u=b168ecbb640860b13ea75b734ab879f013c74d27&v=4"
            alt="Gabriel Araujo"
          />
          <div>
            <strong>Node and Ts</strong>
            <p>Aplicando conceitos de Node.js com Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/37147786?s=460&u=b168ecbb640860b13ea75b734ab879f013c74d27&v=4"
            alt="Gabriel Araujo"
          />
          <div>
            <strong>Node and Ts</strong>
            <p>Aplicando conceitos de Node.js com Typescript</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
