import { Center } from "@/components/layout/center";
import Container from "@/components/layout/container";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Navbar } from "@/components/shared/navbar";
import type { FC, ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
