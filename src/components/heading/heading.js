const Heading = ({ title, description }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>

      <style jsx>
        {`
          .header {
            padding: 0 var(--gutter) 60px;
          }

          h1 {
            font-size: 30px;
            font-weight: 600;
            letter-spacing: -2px;
            padding-bottom: 10px;
          }

          p {
            font-size: 14px;
            line-height: 17px;
          }
        `}
      </style>
    </div>
  )
}

export default Heading;
