import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing(2.5)};
`;

export const ListReviews = styled.ul`
  list-style-type: none;
`;
export const DetailsItem = styled.li`
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const AuthorName = styled.h2`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.mediumX};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const InfoContent = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
`;
