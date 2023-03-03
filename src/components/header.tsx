// Header component with profile picture and welcome message

import { ReactComponent as ProfileIcon } from '../assets/images/Profile-Icon.svg';

function Header() {
  return (
    <header className="flex-row-between">
      <h1 className="title">Welcome</h1>
      <ProfileIcon width={70} />
    </header>
  );
}

export default Header;
