import logo from "../../assets/logo.png";

export default function HeaderTW() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16 justify-center">
      <img src={logo} alt="A canvas" className="object-contain mb-8 w-44 h-44" />
      <h1 className="text-xl md:text-4xl font-semibold tracking-header-spacing text-center uppercase text-header-h1 m-0 font-header">ReactArt</h1>
      <p className="text-center m-0 text-header-p">A community of artist and art-lovers.</p>
    </header>
  );
}