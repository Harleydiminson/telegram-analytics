/**
 *                                  TELEGRAM-ANALYTICS
 */

function Header() {
    return (
      <header className="header">
        <nav className="tool-bar">
          <ul>
            <li><h1>ANALYTICS</h1></li>
            <button className="search-button">Search</button>
            <li>
              <input type="text" />
            </li>
          </ul>
          <ul>
            <li>
              <button className="hover-button">Sign in</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  