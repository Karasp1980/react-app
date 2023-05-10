//import "./App.module.css";
//import StatefulGreetingWithPrevState from "./components/StatefulGreetingWIthPrevState";
//import NavBarSimple from "./components/NavBarSimple";
//import Sidebar from "./components/Sidebar";
//import EventsClass from "./components/EventsClass";
//import EventsFunctional from "./components/EventsFunctional";
//import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
//import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
//import NestingComponents from "./components/NestingComponents";
//import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
//import NavBarForm from "./components/NavBarForm";
//import css from './App.module.css';
//import Content from "./components/Content";
//import Clock from "./components/Clock";
//import LifeCyclesCDM from "./components/LifeCyclesCDM";
//import LifeCyclesCDU from "./components/LifeCyclesCDU";
//import LifeCyclesCWU from "./components/LifeCyclesCWU";
//import ControlledForm from "./components/ControlledForm";
//import UncontrolledForm from "./components/UncontrolledForm";
//import { SearchBar1 } from "./components/SearchBar1";
//import { SearchBar2 } from "./components/SearchBar2";
//import { SearchBar3 } from "./components/SearchBar3";
//import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
//import Sidebar from "./components/Sidebar";
//import NavBarForm from "./components/NavBarForm";
//import Content from "./components/Content";
//import "./App.css";
//import ControlledFormHooks from "./components/ControlledFormHooks";
//import "./App.css";
//import UseStateWithArrays from "./components/UseStateWithArrays";
//import UseStateWithObjects from "./components/UseStateWithObjects";
//import ClassCounter from "./components/ClassCounter";
//import UseEffectCounter from "./components/UseEffectCounter";
//import ContentHooks from "./components/ContentHooks";
//import HTTPRequests from "./components/HTTPRequests";
//import HTTPPost from "./components/HTTPPost";
// "./App.css";
//import HTTPHooks from "./components/HTTPHooks";
import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
//import Content from "./components/Content";
// import ContentHooks from "./components/ContentHooks";
//import ContentAPI from "./components/ContentAPI";
import ContentAPIHooks from "./components/ContentAPIHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;


