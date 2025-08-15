import { ErrorBoundary } from "react-error-boundary";
import { MainContent } from "./MainContent/MainContent";
import styles from "./Layout.module.scss";
import { Fallback } from "../../shared/ui/ErrorFallback/ErrorFallback";
import { Sidebar } from "./Sidebar/Sidebar";
import { HeaderApp } from "./Header/Header";
import { useLocation } from "@tanstack/react-router";

export const Layout = () => {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");

  if (isLogin) {
    return <MainContent />;
  }

  return (
    <div className={styles.container} key={location.pathname}>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Sidebar />
        <div className={styles.contentWrapper}>
          <HeaderApp />
          <MainContent />
        </div>
      </ErrorBoundary>
    </div>
  );
};
