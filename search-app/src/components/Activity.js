

export default function Activity({ activity }) {
    let {title, price, currency, rating, isSpecialOffer} = activity;
  
    const getStars = () => {
      const roundedRating = Math.round(rating)
      return Array.from(Array(5).keys()).map((val) => {
        if (val < roundedRating) {
          return '★';
        }
        return '☆';
      }).join('');
    }
  
    return (
      <div className='activity'>
            <h3>{title}</h3>
            <div className="price-rating-container">
              <div>{currency}{price}{isSpecialOffer ? <> - Special offer!</> : <></>}</div>
              <div className='user-rating'>
                {getStars()} ({rating})
              </div>
            </div>
          </div>
    );
  }
  