export function generateId (): string {
    let id = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };