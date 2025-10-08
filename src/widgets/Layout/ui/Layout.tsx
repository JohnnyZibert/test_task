import { ErrorBoundary } from "react-error-boundary";
import { MainContent } from "./MainContent/MainContent";
import styles from "./Layout.module.scss";
import { Fallback } from "../../../shared/ui/ErrorFallback/ErrorFallback";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = () => {
  return (
    <div className={styles.container} key={location.pathname}>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Sidebar />
        <div className={styles.contentWrapper}>
          <MainContent />
        </div>
      </ErrorBoundary>
    </div>
  );
};
