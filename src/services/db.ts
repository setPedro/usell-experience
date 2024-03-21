import { db } from "@/lib/firebase";
import { Web, Websites } from "@/sections/app/WebsiteTypes";
import { generateId } from "@/utils/generateId";
import { User } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";

// create website
export const createWebsite = async (imageURL: string, input: string, user: User) => {
    if (input && imageURL !== null && user) {
      const newWebId = generateId();
      const newWebsite: Web = {
        imageURL,
        input,
      };
      websitesToDatabase(newWebId, newWebsite, user);
    } else {
      console.log("Website URL required");
    }
  };


type setWebsitesType = React.Dispatch<React.SetStateAction<Websites>>;
// read websites from db
export const readWebsitesFromDB = async (
  user: User,
  setWebsites: setWebsitesType
) => {
  if (!user) return; // stop the function if there is no user
  const userId = user.uid;
  const userRef = ref(db);
  try {
    const snapshot = await get(child(userRef, `users/${userId}`));
    if (snapshot.exists()) {
      setWebsites(snapshot.val());
    } else {
      setWebsites({});
    }
  } catch (error) {
    console.error("Error reading websites from DB:", error);
  }
};

// write websites to db
export const websitesToDatabase = async (
  newWebId: string,
  newWebsite: Web,
  user: User
) => {
  const userId = user.uid;
  const userRef = ref(db, `users/${userId}/${newWebId}`);
  set(userRef, newWebsite)
    .then(() => {
      console.log("Website added successfully");
    })
    .catch((error) => {
      console.error("Error adding website: ", error);
    });
};
