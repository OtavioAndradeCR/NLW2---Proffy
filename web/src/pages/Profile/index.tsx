import React from 'react';

import PageHeader from '../../components/PageHeader';
import ReactPlayer from 'react-player/lazy';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function Profile() {
  return (
    <div id='page-profile' className='container'>
      <PageHeader
        title='Comece a estudar agora!'
        description='Conheça a metodologia de ensino do seu proffy.'
      />
      <main className='profileMain'>
        <header>
          <img
            src='https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4'
            alt='Diego Fernandes'
          />
          <div>
            <strong className='title'>Diego Fernandes</strong>
            <span>React, React Native</span>
          </div>
        </header>
        <p>
          CTO at <span>@Rocketseat</span>. Passionate about education and
          changing people's lives through programming.
        </p>
        <div className='articlesContainer'>
          <strong className='title'>Artigos</strong>
          <ul>
            <li>
              <a href='https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/'>
                Terminal com Oh My Zsh, Spaceship, Dracula e mais
              </a>
            </li>
            <li>
              <a href='https://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/'>
                TypeScript: Vantagens, mitos, dicas e conceitos fundamentais
              </a>
            </li>
            <li>
              <a href='https://blog.rocketseat.com.br/react-hooks/'>
                React Hooks: Como utilizar, motivações e exemplos práticos
              </a>
            </li>
          </ul>
        </div>
        <div className='videosContainer'>
          <strong className='title'>Video</strong>
          <article>
            <strong className='videoTitle'>
              Consumindo APIs no React com SWR
            </strong>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=Pbs1VIwPoRA'
                width='100%'
                height='100%'
              />
            </div>
          </article>
          <article>
            <strong className='videoTitle'>
              Criando um PWA com React Native & Expo Web | Code/Drops{' '}
            </strong>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=AqJKAJ0TKms'
                width='100%'
                height='100%'
              />
            </div>
          </article>
          <article>
            <strong className='videoTitle'>Setup para apps Node.js</strong>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=rCeGfFk-uCk'
                width='100%'
                height='100%'
              />
            </div>
          </article>
        </div>
        <footer>
          <p>
            Preço/hora<strong>R$ 100,00</strong>
          </p>
          <a target='_blank' href={`https://wa.me/123456789987`}>
            <img src={whatsappIcon} alt='WhatsApp' />
            Entrar em Contato
          </a>
        </footer>
      </main>
    </div>
  );
}

export default Profile;
