const Footer = () => {
  return (
    <footer>
      <div>
        <small>@<strong>2013AKQA Ltd.</strong> Registered in England: 2964394</small>
      </div>
      <style jsx>
        {`
          footer {
            background: var(--color-grey-02);
            display: block;
            width: 100%;
          }

          div {
            align-items: center;
            display: flex;
            height: 41px;
            margin: 0 auto;
            max-width: 500px;
            padding: 0 var(--gutter);
          }

          small {
            color: var(--color-white);
            font-size: 11px;
          }

          small strong {
            font-weight: 600;
          }
        `}
      </style>
    </footer>
  )
}

export default Footer;
