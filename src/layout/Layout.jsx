import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import Container from 'components/ui/Container';
import { Main } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
