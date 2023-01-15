import NavLinks from 'data/NavLinks';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as FooterStyles from './FooterStyles';
export default function Footer() {
  const MoveToTop = () => {
    scrollTo(0, 0);
  };
  return (
    <FooterStyles.Frame>
      <FooterStyles.CategoryFrame>
        <FooterStyles.Title>PAGES</FooterStyles.Title>
        {NavLinks.map((nav) => (
          <Link
            key={nav.title}
            href={nav.link}
          >
            <FooterStyles.Pages>{nav.title}</FooterStyles.Pages>
          </Link>
        ))}
      </FooterStyles.CategoryFrame>
      <FooterStyles.CategoryFrame>
        <FooterStyles.Title>SOCIAL</FooterStyles.Title>
        <FooterStyles.SocialFrame>
          <a
            href={'https://github.com/reshur-sol'}
            target='_blank'
          >
            <FontAwesomeIcon
              icon={faGithub}
              className='icon'
            />
          </a>
        </FooterStyles.SocialFrame>
        {/* <FooterStyles.TopBtn onClick={MoveToTop}>TOP</FooterStyles.TopBtn> */}
      </FooterStyles.CategoryFrame>
    </FooterStyles.Frame>
  );
}
