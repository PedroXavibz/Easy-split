import { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLinkedinLine } from 'react-icons/ri';
import ContainerHeader from './style';
import Context from '../../style';
import Logo from '../../assets/Logo.png';

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    document.addEventListener('click', ({ target }) => {
      const el = target.closest('a');
      if (!el || el.getAttribute('href') !== '#/contact') setIsHidden(true);
    });
  }, []);

  return (
    <ContainerHeader>
      <Context>
        <a href='#/'>
          <img src={Logo} alt='logo' title='Easy split' />
        </a>
        <nav>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a
                href='#/contact'
                style={!isHidden ? { color: '#ffffff', textDecoration: 'underline #ffffff' } : {}}
                onClick={() => setIsHidden(!isHidden)}
              >
                Contact
              </a>
              {!isHidden && (
                <ul>
                  <li>
                    <a href='https://github.com/PedroXavibz'>
                      <FiGithub />
                      github
                    </a>
                  </li>
                  <li>
                    <a href='mailto:joao.pedro.xavibz@gmail.com' subject='link'>
                      <MdAlternateEmail />
                      email
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/joão-pedro-45ab4a212/'>
                      <RiLinkedinLine />
                      linkedin
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </Context>
    </ContainerHeader>
  );
};

export default Header;
