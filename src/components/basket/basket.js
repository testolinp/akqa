import Item from './item/item';

const Basket = () => {
  return (
    <>
      <div className="grid">
        <div className="header">
          <p>Product</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Cost</p>
        </div>
        <Item />
        <Item />
        <Item />
      </div>
      <div className="results">
        <div className="results-row">
          <p>Subtotal</p>
          <span>11.96</span>
        </div>
        <div className="results-row">
          <p>VAT @20%</p>
          <span>11.96</span>
        </div>
        <div className="results-row results-row--cost">
          <p>Total cost</p>
          <span>11.96</span>
        </div>
      </div>
      <div className="btn">
        <button>Buy Now <span>{`>>`}</span></button>
      </div>
      <style jsx>
        {`
          .header {
            border-bottom: 1px solid var(--color-black);
            display: grid;
            grid-template-columns: 52% repeat(3, 16%);
            margin-bottom: 10px;
            padding: 0 20px;
            text-align: center;
          }

          .header p {
            font-size: 16px;
            font-weight: 600;
            line-height: 14px;
          }

          .header p:first-child {
            text-align: left;
          }

          .header p:last-child {
            text-align: right;
          }

          .results {
            padding: 30px var(--gutter) 50px;
          }

          .results-row {
            color: var(--color-grey-03);
            display: flex;
            font-size: 16px;
          }

          .results-row span {
            margin-left: auto;
          }

          .results-row--cost {
            color: var(--color-black);
            font-weight: 600;
            padding-top: 25px;
          }

          .btn {
            display: flex;
            padding: 0 var(--gutter) 50px;
          }

          .btn button {
            background: var(--color-blue);
            border-radius: 10px;
            border: 0 none;
            box-shadow: 4px 4px 5px rgb(0 0 0 / 40%);
            color: var(--color-white);
            font-size: 16px;
            font-weight: 600;
            height: 50px;
            margin-left: auto;
            padding: 0 8px;
          }

          .btn button span {
            font-size: 12px;
            letter-spacing: -1px;
          }
        `}
      </style>
    </>
  )
}

export default Basket;
