import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import PostList, { postLoader } from './pages/PostList';
import PostComment from './pages/PostComment';
import Error from './components/Error';
import Login from './components/Login';
import Signup from './components/Signup';
import RequireAuth from './components/RequireAuth';
import Product from './components/Product';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/posts",
        element: (
          <RequireAuth>
            <PostList />
        </RequireAuth>
      ),
        loader: postLoader
      },
      {
        path: "/posts/:postId",
        element: <PostComment />
      },
      {
        path: "/product",
        element: <Product />
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />

}

// function App() {

//   return (
//     <BrowserRouter>
//     <Header />
//       <Routes>
//         <Route index element={<Home />}></Route>
//         <Route path="/posts" element={<PostList />}></Route>
//         <Route path="/posts/:postId" element={<PostComment />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )

// }

export default App
