import {
  HeaderWrapper,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
  Link,
} from './Header.styled';

export function Header() {
  return (
    <HeaderWrapper>
      <NavigationContainer>
        <NavigationWrapper>
          <NavigationItem>
            <Link to="/">Home</Link>
          </NavigationItem>

          <NavigationItem>
            <Link to="/movies">Movies</Link>
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
