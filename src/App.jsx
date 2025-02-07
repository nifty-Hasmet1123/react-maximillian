import AuthInputs from './components/AuthInputs.jsx';
// import Header from './components/Header.jsx';
import HeaderTW from './components/HeaderTailwind/HeaderTW.jsx';

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <HeaderTW />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
