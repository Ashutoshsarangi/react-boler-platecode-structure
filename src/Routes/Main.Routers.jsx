import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Layouts/Header/header';
import Footer from '../Components/Layouts/Footer/footer';

const Dashboard = lazy(() => import('../Components/Layouts/Dashboard/dashboard'))
const Home = lazy(() => {
  return import('../Components/Layouts/Home/home')
})
const SignIn = lazy(() => {
  return import('../Components/Layouts/Auth/signin')
})
const SignUp = lazy(() => {
  return import('../Components/Layouts/Auth/signup')
})


const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading .......</h1>}>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route component={() => <h1>404 component Not Found</h1>} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter >
  );
}

export default MainRouter;