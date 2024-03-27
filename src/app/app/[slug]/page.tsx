import SideBar from "@/components/sidebar/SideBar";
import ProtectedRoute from "@/components/protectedRoute";
import MainApp from "@/sections/app/MainApp";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <ProtectedRoute>
      <main className="h-screen flex bg-appbackground">
        <SideBar />
        <MainApp />
      </main>
    </ProtectedRoute>
  );
}
