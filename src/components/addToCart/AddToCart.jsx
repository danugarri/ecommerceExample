export const AddToCart = ({ onHandleClick, fulfilled }) => {
  return (
    <div>
      <button onClick={onHandleClick} disabled= {fulfilled} className='add-button'>ADD TO CART</button>
    </div>
  );
};
