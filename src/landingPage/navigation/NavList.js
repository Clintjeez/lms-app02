import { Link } from "react-router-dom";

const NavList = ({ setShowLinks, setOpen }) => {
  const links = [
    {
      id: 1,
      url: "/",
      text: "home",
    },
    {
      id: 2,
      url: "/courses",
      text: "courses",
    },
    {
      id: 3,
      url: "/pricing",
      text: "pricing",
    },
    {
      id: 4,
      url: "/teach",
      text: "teach",
    },
  ];
  return (
    <ul className="links">
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <Link
              to={url}
              onClick={() => {
                setShowLinks(false);
                setOpen(false);
              }}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
