import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #ccc;
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const NavigationContainer = styled.nav``;
export const NavigationWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const NavigationItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1.4em 1em 1em 1em;
  color: black;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #0040ff;
    border-bottom: 1px solid #0040ff;
  }
`;
