import { Route, Routes } from "react-router-dom";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const RoutesWithNotFound = ({ children }: IProps) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

