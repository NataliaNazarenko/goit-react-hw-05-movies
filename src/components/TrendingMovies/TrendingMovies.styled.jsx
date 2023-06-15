import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  list-style-type: none;
`;

export const MoviesItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #0040ff;
  }
`;
