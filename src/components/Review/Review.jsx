import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import { Li, SectionWrap, Text, Title, Ul } from './Review.styled';
import { Loader } from 'components';

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const review = await getMovieReviews(movieId);
        setReviews(review.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <SectionWrap>
        {reviews.length === 0 && <p>Reviews not found</p>}
        {reviews.length > 0 && (
          <Ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <Li key={id}>
                  <Title>
                    Author: <span>{author}</span>
                  </Title>
                  <Text>{content}</Text>
                </Li>
              );
            })}
          </Ul>
        )}
        {isLoading && <Loader />}
        {error && <p>Oops... Something went wrong...</p>}
      </SectionWrap>
    </>
  );
};

export default Review;
