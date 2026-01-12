import SmoothScroll from './components/layout/SmoothScroll';
import PixelBlast from './components/ui/PixelBlast';
import Home from './pages/Home';

function App() {
  return (
    <SmoothScroll>
      <div className="fixed inset-0 w-full h-full -z-10">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <Home />
    </SmoothScroll>
  );
}

export default App;
