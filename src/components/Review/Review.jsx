import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import { Li, SectionWrap, Text, Title, Ul } from './Review.styled';

const Review = () => {
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
      </SectionWrap>
    </>
  );
};

export default Review;
