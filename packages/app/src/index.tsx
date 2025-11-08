import { createRoot } from "react-dom/client";
import { Loader } from "@atlz253/react/Loader";
import { Counter } from "@atlz253/react/Counter";
import { Button } from "@atlz253/react/Button";

const root = createRoot(document.querySelector("#root") as HTMLElement);

root.render(
  <>
    <div>
      <Loader caption={"Hello, world!"} />
    </div>
    <div>
      <Counter count={10} />
    </div>
    <div>
      <Button>Stylized button</Button>
    </div>
  </>
);
