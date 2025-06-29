import type { Route } from "./+types/index";
import { Home } from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Still" },
    { name: "description", content: "Personal website for Andrew Still" },
  ];
}

export default function Index() {
  return <Home />;
}
