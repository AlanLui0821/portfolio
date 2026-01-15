import SmoothScroll from './components/layout/SmoothScroll';
import DotGrid from './components/ui/DotGrid';
import Home from './pages/Home';

function App() {
  return (
    <SmoothScroll>
      <div className="fixed inset-0 w-full h-full -z-10">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#B19EEF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <Home />
    </SmoothScroll>
  );
}

export default App;
