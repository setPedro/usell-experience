export type Web = {
    imageURL: string;
    input: string;
    timestamp: string
    openAIResponse: string
};

export type Websites = Record<string, Web> 