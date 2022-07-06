const Rating = ({ rating }) => {
  const ratingArr = Array(rating).fill("*");
  return <div>{ratingArr}</div>;
};

export default Rating;
