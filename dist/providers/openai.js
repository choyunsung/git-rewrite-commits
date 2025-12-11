import OpenAI from 'openai';
export class OpenAIProvider {
    constructor(apiKey, model = 'gpt-3.5-turbo') {
        if (!apiKey) {
            throw new Error('OpenAI API key is required');
        }
        this.openai = new OpenAI({ apiKey });
        this.model = model;
    }
    async generateCommitMessage(prompt, systemPrompt) {
        const response = await this.openai.chat.completions.create({
            model: this.model,
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.3,
            max_tokens: 200,
        });
        const message = response.choices[0]?.message?.content?.trim();
        if (!message) {
            throw new Error('No commit message generated');
        }
        return message;
    }
    getName() {
        return `OpenAI (${this.model})`;
    }
}
//# sourceMappingURL=openai.js.map