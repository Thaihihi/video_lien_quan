import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="grid grid-cols-5">
      <section className="col-span-1">
        <SideBar />
      </section>
      <section className="col-span-4">
        <Content />
      </section>
    </main>
  );
}

export default App;
