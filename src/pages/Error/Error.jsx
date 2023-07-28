import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Button, Text, TextWrap } from './Error.styled';
import { routes } from 'routes';
import { Section } from 'styles/Common.styled';

const ErrorPage = () => {
  const location = useLocation();

  const goBackLink = location?.state?.from ?? routes.HOME;

  return (
    <>
      <Section>
          <Container>
            <Button to={goBackLink}>Go Back</Button>
            <TextWrap>
              <Text>404 Not Found</Text>
            </TextWrap>
          </Container>
      </Section>
    </>
  );
};

export default ErrorPage;
