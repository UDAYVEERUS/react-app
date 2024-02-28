import React from 'react';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li>
            <Link href="/aboutus" passHref>
                <a>
                  <div>aboutus</div>
                </a>
            </Link>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
