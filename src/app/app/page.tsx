import SideBar from "@/components/Sidebar";
import ProtectedRoute from "@/components/protectedRoute";
import MainApp from "@/sections/app/MainApp";
import { generateId } from "@/utils";

export default function App() {
  const webId = generateId();
  return (
    <ProtectedRoute>
      <main className="h-screen flex bg-appbackground">
        <SideBar />
        <MainApp webId={webId} />
      </main>
    </ProtectedRoute>
  );
}
