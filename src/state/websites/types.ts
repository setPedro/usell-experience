export type Web = {
  imageURL: string;
  input: string;
  timestamp: number;
  openAIResponse: string;
  id: string;
};

export type Websites = Record<string, Web>;

export type WebsiteState = { websites: Websites };
