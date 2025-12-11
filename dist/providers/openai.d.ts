import { AIProvider } from './types.js';
export declare class OpenAIProvider implements AIProvider {
    private openai;
    private model;
    constructor(apiKey: string, model?: string);
    generateCommitMessage(prompt: string, systemPrompt: string): Promise<string>;
    getName(): string;
}
//# sourceMappingURL=openai.d.ts.map