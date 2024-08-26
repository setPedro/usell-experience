import SignUpLogIn from "@/components/auth";
import UnprotectedRoute from "@/components/unprotectedRoute";

type Props = {
  params: {
    authMethod: string;
  };
};

export default function AuthPage({ params }: Props) {
  const authMethod = params.authMethod;

  const validAuthMethods = ["signup", "login"];
  if (!authMethod || !validAuthMethods.includes(authMethod as string)) {
    return (
      <div className="h-screen grid place-items-center text-center bg-black">
        404 - Page Not Found
      </div>
    );
  }

  return (
    <UnprotectedRoute>
      <SignUpLogIn />
    </UnprotectedRoute>
  );
}
