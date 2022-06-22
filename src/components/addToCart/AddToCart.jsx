export const AddToCart = ({ onHandleClick, fulfilled }) => {
  return (
    <div>
      <button onClick={onHandleClick} disabled= {fulfilled}>ADD TO CART</button>
    </div>
  );
};
