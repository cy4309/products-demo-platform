import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col">
      <Header />
      <main className="py-layoutPadding flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
