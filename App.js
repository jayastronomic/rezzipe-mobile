import { TailwindProvider } from "tailwind-rn/dist";
import utilities from "./tailwind.json";
import Test from "./src/components/Test";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Test></Test>
    </TailwindProvider>
  );
}
