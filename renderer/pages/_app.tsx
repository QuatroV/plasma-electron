import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { api } from "../utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session} refetchInterval={60}>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
