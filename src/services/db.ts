import { db } from "@/lib/firebase";
import { Web } from "@/state/websites/types";
import { generateId } from "@/utils/generateId";
import { User } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";

// create website
export const createWebsite = async (
  imageURL: string,
  input: string,
  openAIResponse: string,
  user: User
) => {
  if (input && imageURL !== null && user) {
    const id = generateId();
    const timestamp = Date.now();
    const newWebsite: Web = {
      imageURL,
      input,
      openAIResponse,
      timestamp,
      id,
    };
    _addWebsites(id, newWebsite, user);
    return id
  } else {
    console.log("Website URL required");
  }
};

// read websites from db
export const readWebsites = async (user: User) => {
  const userId = user.uid;
  const userRef = ref(db);
  try {
    const snapshot = await get(child(userRef, `users/${userId}`));
    if (!snapshot.exists()) {
      return null;
    } else {
      return snapshot.val();
    }
  } catch (error) {
    console.error("Error reading websites from DB:", error);
  }
};

// write websites to db
export const _addWebsites = async (
  id: string,
  newWebsite: Web,
  user: User
) => {
  const userId = user.uid;
  const userRef = ref(db, `users/${userId}/${id}`);
  set(userRef, newWebsite)
    .then(() => {
      console.log("Website added successfully");
    })
    .catch((error) => {
      console.error("Error adding website: ", error);
    });
};
