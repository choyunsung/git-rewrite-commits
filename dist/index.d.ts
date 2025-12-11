export interface RewriteOptions {
    provider?: 'openai' | 'ollama';
    apiKey?: string;
    model?: string;
    ollamaUrl?: string;
    branch?: string;
    dryRun?: boolean;
    verbose?: boolean;
    quiet?: boolean;
    maxCommits?: number;
    skipBackup?: boolean;
    skipWellFormed?: boolean;
    minQualityScore?: number;
    template?: string;
    language?: string;
    prompt?: string;
    skipRemoteConsent?: boolean;
}
export interface CommitInfo {
    hash: string;
    message: string;
    files: string[];
    diff: string;
}
export declare class GitCommitRewriter {
    private provider;
    private options;
    constructor(options?: RewriteOptions);
    private execCommand;
    private askConfirmation;
    private parseTemplate;
    private getLanguageInstructions;
    private assessCommitQuality;
    private checkRemoteAPIConsent;
    private redactSensitivePatterns;
    private findCommitMessageContext;
    private generateCommitMessage;
    private checkGitRepository;
    private checkUncommittedChanges;
    private getCurrentBranch;
    private getCommits;
    private getCommitInfo;
    private createBackupBranch;
    private rewriteHistory;
    generateForStaged(): Promise<string>;
    rewrite(): Promise<void>;
}
export default GitCommitRewriter;
//# sourceMappingURL=index.d.ts.map