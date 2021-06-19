const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="images/logo.png" alt="AKQA" />
      </a>

      <style jsx>
        {`
          header {
            padding: 120px var(--gutter) 0;
          }

          img {
            max-width: 100px;
          }
        `}
      </style>
    </header>
  )
}

export default Header;
