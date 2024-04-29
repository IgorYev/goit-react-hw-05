import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Suspense fallback={<div className={css.loading}>Loading page...</div>}>
        <Navigation />
        {children}
      </Suspense>
    </div>
  );
}
