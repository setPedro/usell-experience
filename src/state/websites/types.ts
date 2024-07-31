export type Scores = {
  design?: number;
  performance?: number;
};

export type OpenAIResponse = {
  response: string;
  scores: Scores;
};

export type Web = {
  imageURL: string;
  input: string;
  timestamp: number;
  openAIResponse: OpenAIResponse;
  id: string;
};

export type Websites = Record<string, Web>

export type WebsiteState = { 
  websites: Websites;
  isWebsitesLoading: boolean;
};