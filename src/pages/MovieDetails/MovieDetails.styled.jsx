import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const GenresList = styled.ul`
  list-style-type: none;
`;

export const GenresItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DetailsInfo = styled.ul`
  list-style-type: none;
`;

export const DetailsItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: #0040ff;
    border-bottom: 1px solid #0040ff;
  }
`;
