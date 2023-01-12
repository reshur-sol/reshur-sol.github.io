import Link from 'next/link';
import MetaData from '../../data/metadata';
import NavLinks from '../../data/NavLinks';
import * as NavStyles from './Nav.Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
  return (
    <NavStyles.Frame>
      <NavStyles.Logo>
        <FontAwesomeIcon icon={faMoon} />
      </NavStyles.Logo>
      <NavStyles.Title>{MetaData.title}</NavStyles.Title>
      <NavStyles.Menu>
        {NavLinks.map((nav) => (
          <Link
            href={nav.link}
            key={nav.title}
          >
            <NavStyles.MenuItem>{nav.title}</NavStyles.MenuItem>
          </Link>
        ))}
      </NavStyles.Menu>
    </NavStyles.Frame>
  );
}
