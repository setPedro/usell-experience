import SideBar from "@/components/TempSidebar";
import ProtectedRoute from "@/components/protectedRoute";
import MainApp from "@/sections/app/MainApp";
import { generateId } from "@/utils/generateId";

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
