import AnimatedPage from "./components/AnimatedPage";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <AnimatedPage>
      <div className="w-full flex items-center justify-center">
        <Landing />
      </div>
    </AnimatedPage>
  );
}
