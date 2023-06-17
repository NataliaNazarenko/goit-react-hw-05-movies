import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #ccc;
  padding: ${props => props.theme.spacing(2)} 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing(5)};
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
  gap: ${props => props.theme.spacing(2)};
  margin: ${props => props.theme.spacing(5)} ${props => props.theme.spacing(3.75)};
  color: black;
  cursor: pointer;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.dark};
  font-weight: 500;

  &.active {
    color: ${props => props.theme.colors.accent};
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }
`;
