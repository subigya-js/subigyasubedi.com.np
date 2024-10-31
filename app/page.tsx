import Landing from "./components/Landing";
import AnimatedPage from "./components/AnimatedPage";

export default function Home() {
  return (
    <AnimatedPage>
      <div className="w-full h-full flex items-center justify-center">
        <Landing />
      </div>
    </AnimatedPage>
  );
}
