import { BrowserRouter } from "react-router-dom";
import { DefaultLayout, SearchInput, UserCard } from "./components/index";
import "./styles.css";

export default function App() {
  const user = {
    name: "山田 太郎",
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "abc@example.com",
    group: {
      name: "hogehoge部"
    },
    website: "https://google.com"
  };
  return (
    <BrowserRouter>
      <DefaultLayout>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
