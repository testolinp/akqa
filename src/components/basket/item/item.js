const Item = () => {
  return (
    <div className="item">
      <p>Cotton T-Shirt, Medium</p>
      <span>£1.99</span>
      <div>
        <input type="number" />
      </div>
      <span className="cost">£1.99</span>

      <style jsx>
        {`
          .item {
            display: grid;
            grid-template-columns: 52% repeat(3, 16%);
            padding: 8px 20px;
            font-size: 16px;
            text-align: center;
          }

          .item p:first-child {
            text-align: left;
          }

          .item p:last-child {
            text-align: right;
          }

          .item:nth-child(odd) {
            background: var(--color-grey-04);
          }

          input {
            width: 40px;
          }

          .cost {
            text-align: right;
          }
        `}
      </style>
    </div>
  )
}

export default Item;
