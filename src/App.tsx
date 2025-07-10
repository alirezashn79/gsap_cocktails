import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return <div className="text-2xl text-green-500 font-bold">App</div>;
}
