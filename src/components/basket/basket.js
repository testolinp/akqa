import { useBasket } from '../../core/context/basket';
import Item from './item/item';

const Basket = () => {
  const { basketItems, getBasketSubtotal, getBasketVat, getTotal } = useBasket();

  return (
    <>
      <div className="grid">
        <div className="header">
          <p>Product</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Cost</p>
        </div>
        {basketItems.map((item, index) =>
          <Item key={index} {...item} />
        )}
        {!!basketItems.length || <p className="empty">Cart is Empty</p>}
      </div>
      <div className="results">
        <div className="results-row">
          <p>Subtotal</p>
          <span>£{getBasketSubtotal()}</span>
        </div>
        <div className="results-row">
          <p>VAT @20%</p>
          <span>£{getBasketVat()}</span>
        </div>
        <div className="results-row results-row--cost">
          <p>Total cost</p>
          <span>£{getTotal()}</span>
        </div>
      </div>
      <div className="btn">
        <button disabled={!basketItems.length}>Buy Now <span>{`>>`}</span></button>
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

          .btn button:focus {
            outline: 1px dotted rgba(0, 0, 0, .3);
            outline-offset: 4px;
          }

          .btn button:disabled {
            opacity: .4;
          }

          .btn button span {
            font-size: 12px;
            letter-spacing: -1px;
          }

          .empty {
            font-size: 14px;
            padding: 0 var(--gutter);
          }
        `}
      </style>
    </>
  )
}

export default Basket;
