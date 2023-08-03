import "./globals.css";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./global-error";

export default function RootLayout(props: { children: React.ReactNode; Left: React.ReactNode; Right: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary fallback={<Error />}>
          <div className="flex flex-row items-center justify-center w-screen h-20 text-3xl bg-amber-400">네비게이션바인척 하는놈</div>
          <div className="flex flex-row justify-center mt-20 flex-nowrap">
            {props.children}
            {props.Left}
            {props.Right}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
