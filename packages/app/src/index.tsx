import { createRoot } from "react-dom/client";
import { Loader } from "@atlz253/react/Loader";

const root = createRoot(document.querySelector("#root") as HTMLElement);

root.render(<Loader />);
