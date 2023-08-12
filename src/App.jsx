import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='App'>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
