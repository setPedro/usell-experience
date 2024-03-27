// import { DatabaseReference, child, get } from "firebase/database";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// export async function checkWebId(args: {
//   userId: string | null;
//   webId: string;
//   userRef: DatabaseReference;
//   router: AppRouterInstance;
// }) {
//   const { userId, webId, userRef, router } = args;

//   try {
//     const snapshot = await get(child(userRef, `users/${userId}/${webId}`));
//     if (!snapshot.exists()) {
//       router.push("/app");
//     } 
//     return snapshot.val();
//   } catch (error) {
//     console.error(error);
//     // Handle error gracefully, for example:
//     throw new Error("An error occurred while checking web ID.");
//   }
// }
