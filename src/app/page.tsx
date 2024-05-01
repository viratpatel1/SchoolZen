import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import Index from "./Components";
// import { Provider } from "react-redux";
// import { store } from "./Components/redux/store";

export default function Home() {
  return (
    <div>
      {/* <Provider store={store}> */}
      <Index />
      {/* </Provider> */}
    </div>
  )
}
