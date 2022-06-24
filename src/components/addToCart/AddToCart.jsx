export const AddToCart = ({ onHandleClick, fulfilled }) => {
  const buttonStyle = !fulfilled ? 'add-button' : 'disabled-button';
  return (
    <div>
      <button onClick={onHandleClick} disabled={fulfilled} className={buttonStyle}>
        ADD TO CART
      </button>
    </div>
  );
};
