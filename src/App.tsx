import React from 'react';
import './App.css';
import AppRoutes from "./components/AppRoutes";
import {Popup} from "./components/Popup/Popup";
import {useAppSelector} from "./lib/hooks";

function App() {
    const isPopupVisible = useAppSelector(state=>state.users.popupVisible);
  return (
      <div className="App">
          <AppRoutes/>
          {isPopupVisible&&<div className={'popup'}>
              <Popup/>
          </div>}
      </div>
  );
}

export default App;
