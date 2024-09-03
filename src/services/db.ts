import { db } from "@/lib/firebase";
import { Web, Websites, OpenAIResponse } from "@/state/websites/types";
import { generateId } from "@/utils";
import { User } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";

export const createWebsite = async (
  imageURL: string,
  input: string,
  openAIResponse: OpenAIResponse,
  user: User
) => {
  if (!input || imageURL === null || !user) {
    console.log("Website URL required");
    return;
  }
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
  return id;
};

export const readWebsites = async (user: User) => {
  const userId = user.uid;
  const userRef = ref(db);
  try {
    const snapshot = await get(child(userRef, `users/${userId}`));
    if (!snapshot.exists()) {
      return null;
    }
    return snapshot.val() as Websites;
  } catch (error) {
    console.error("Error reading websites from DB:", error);
  }
};

export const _addWebsites = async (id: string, newWebsite: Web, user: User) => {
  const userId = user.uid;

  try {
    const userRef = ref(db, `users/${userId}/${id}`);
    set(userRef, newWebsite);
  } catch (error) {
    console.error("Error adding website: ", error);
  }
};
