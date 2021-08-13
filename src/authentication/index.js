import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignUp from "./pages/register";
import Login from "./pages/Login";
// import InputValidation from "./InputValidation/RenderForm";

import { motion } from "framer-motion";

const Authentication = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/signin">
          <motion.div exit={{ opacity: 0 }}>
            <Login />
          </motion.div>
        </Route>
        <Route exact path="/signup">
          <motion.div exit={{ opacity: 0 }}>
            <SignUp />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Authentication;
