import * as React from "react";
import "./Wrapper.css";

const Wrapper: React.FC = ({ children }) => (
  <div className="Wrapper">{children}</div>
);

export default Wrapper;
