import { AIProvider } from './types.js';
export declare class OllamaProvider implements AIProvider {
    private baseUrl;
    private model;
    constructor(model?: string, baseUrl?: string);
    generateCommitMessage(prompt: string, systemPrompt: string): Promise<string>;
    private checkConnection;
    getName(): string;
}
//# sourceMappingURL=ollama.d.ts.map