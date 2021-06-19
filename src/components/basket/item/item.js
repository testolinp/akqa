import { ScreenClassRender, Visible } from 'react-grid-system';
import { breakpoints } from '../../../core/constant';
import Image from 'next/image';
import { useBasket } from '../../../core/context/basket';

const Item = ({id, product, price, qty}) => {
  const { removeProduct, quantityProduct } = useBasket();
  const cost = (price * qty).toFixed(2);

  return (
    <ScreenClassRender render={screenClass => {
      return (
        <div className="item">
          <p>{product}</p>
          <span>£{price}</span>
          <div>
            <input
              type="number"
              min="1"
              max="10"
              value={qty}
              onChange={(e) => quantityProduct(id, e.target.value)}
            />
          </div>
          <Visible sm md lg xl xxl><span className="cost">£{cost}</span></Visible>
          <button className="delete" onClick={() => removeProduct(id)}>
            <Image src="/images/delete.png" width={18} height={25} alt="Remove product from Basket" />
          </button>
          <style jsx>
            {`
              .item {
                display: grid;
                font-size: ${breakpoints.includes(screenClass) ? '16px' : '13px'};
                grid-template-columns: 52% repeat(3, 16%);
                padding: 8px 20px;
                position: relative;
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
                width: ${breakpoints.includes(screenClass) ? '-40px' : '30px'};
                text-align: right;
              }

              .cost {
                text-align: right;
              }

              .delete {
                position: absolute;
                top: 6px;
                right: ${breakpoints.includes(screenClass) ? '-30px' : '15px'};
                width: 30px;
                height: 30px;
                border: 0 none;
                background: transparent;
              }

              .delete:focus {
                outline: 1px dotted rgba(0, 0, 0, .3);
              }
            `}
          </style>
        </div>
      )
    }} />
  )
}

export default Item;
