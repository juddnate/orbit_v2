function Sidebar({ isOpen }) {
  return (
    <aside className={isOpen ? "sidebar" : "sidebar sidebar-hidden"}>
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
