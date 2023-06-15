import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Container from 'components/ui/Container';

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
