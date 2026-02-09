import type { OpenClawPluginApi } from "openclaw/plugin-sdk";
interface PluginConfig {
    enabled?: boolean;
    apiKey?: string;
    defaultSearchEngine?: "search_std" | "search_pro" | "search_pro_sogou" | "search_pro_quark";
    defaultCount?: number;
}
/**
 * BigModel Web Search plugin for OpenClaw
 */
declare const bigmodelWebSearchPlugin: {
    id: string;
    name: string;
    description: string;
    version: string;
    configSchema: {
        parse(value: unknown): PluginConfig;
        uiHints: {
            apiKey: {
                label: string;
                help: string;
                sensitive: boolean;
            };
            defaultSearchEngine: {
                label: string;
                help: string;
            };
            defaultCount: {
                label: string;
                help: string;
            };
        };
    };
    register(api: OpenClawPluginApi): void;
};
export default bigmodelWebSearchPlugin;
//# sourceMappingURL=index.d.ts.map