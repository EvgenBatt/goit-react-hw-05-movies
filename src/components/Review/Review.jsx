import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const review = await getMovieReviews(movieId);
        setReviews(review.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && <p>Reviews not found</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>
                  Author: <span>{author}</span>
                </h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
