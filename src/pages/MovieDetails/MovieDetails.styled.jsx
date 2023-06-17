import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieImage = styled.img`
  width: ${props => props.theme.spacing(75)};
`;

export const MovieDetailsContainer = styled.div`
  margin-left: ${props => props.theme.spacing(5)};
`;

export const MovieTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
`;

export const MovieUserScore = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export const MovieOverview = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const GenresContainer = styled.div`
  margin-top: ${props => props.theme.spacing(2.5)};
`;

export const GenresList = styled.ul`
  list-style-type: none;
`;

export const GenresItem = styled.li`
  display: inline-block;
  margin-right: ${props => props.theme.spacing(2.5)};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.spacing(4.5)};
`;

export const AdditionalInfoContainer = styled.div`
  margin-top: ${props => props.theme.spacing(5)};
`;

export const AdditionalInfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.average};
`;

export const DetailsInfo = styled.ul`
  list-style-type: none;
`;

export const DetailsItem = styled.li`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.mediumX};
  margin-bottom: ${props => props.theme.spacing(2.5)};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.dark};

  &.active {
    color: ${props => props.theme.colors.accent};
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }
`;
