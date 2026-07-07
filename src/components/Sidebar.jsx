function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="sidebar-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="sidebar-nav">
        <a href="#" className="active" aria-label="Board view">
          &#9632;
        </a>
        <a href="#" aria-label="Calendar view">
          &#9632;
        </a>
        <a href="#" aria-label="Stats">
          &#9632;
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
