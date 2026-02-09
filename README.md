# OpenClaw BigModel Web Search Plugin

A web search plugin for [OpenClaw](https://github.com/openclaw/openclaw) powered by BigModel AI Web Search API.

## Overview

This plugin integrates BigModel's AI-powered web search capabilities into OpenClaw, enabling your AI assistant to search the web and retrieve structured results. It supports multiple search engines (standard, pro, Sogou, Quark) with advanced filtering options including time range and domain restrictions.

**Features:**
- 🔍 Multiple search engines (Standard, Pro, Sogou, Quark)
- ⏰ Time-based filtering (last day, week, month, year)
- 🌐 Domain-specific search
- 📊 Structured results optimized for AI consumption
- ⚙️ Configurable defaults per search engine and result count

## Installation

### Option 1: Install from GitHub

```bash
openclaw plugins install https://github.com/cnjack/openclaw-bigmode-websarch.git
```

### Option 2: Install from npm

```bash
openclaw plugins install openclaw-bigmodel-search
```

## Configuration

Add the following configuration to your OpenClaw config file (`~/.openclaw/openclaw.json`):

```json
{
  "plugins": {
    "entries": {
      "openclaw-bigmodel-search": {
        "enabled": true,
        "config": {
          "apiKey": "your-bigmodel-api-key-here",
          "defaultSearchEngine": "search_std",
          "defaultCount": 15
        }
      }
    }
  }
}
```

### Configuration Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `apiKey` | string | Yes | - | BigModel API key for authentication |
| `defaultSearchEngine` | string | No | `search_std` | Default search engine to use |
| `defaultCount` | number | No | `10` | Default number of results to return (1-50) |
| `enabled` | boolean | No | `true` | Enable or disable the plugin |

### Search Engine Options

- `search_std` - Standard search (recommended for most queries)
- `search_pro` - Advanced search with enhanced results
- `search_pro_sogou` - Sogou search engine
- `search_pro_quark` - Quark search engine

### Getting Your API Key

1. Visit [BigModel API Keys Management](https://bigmodel.cn/usercenter/proj-mgmt/apikeys)
2. Sign in or create an account
3. Generate a new API key
4. Copy the key and add it to your OpenClaw configuration

Alternatively, you can set the API key as an environment variable:

```bash
export BIGMODEL_API_KEY="your-api-key-here"
```

## Usage

Once installed and configured, the plugin will register a `web-search` tool that can be used by your OpenClaw agent:

```
User: Search for recent news about artificial intelligence
Agent: *uses web-search tool*
```

### Tool Parameters

The `web-search` tool accepts the following parameters:

- `query` (required): Search query string (recommended < 70 characters)
- `search_engine` (optional): Override the default search engine
- `count` (optional): Number of results to return (1-50)
- `search_recency_filter` (optional): Time filter (`oneDay`, `oneWeek`, `oneMonth`, `oneYear`, `noLimit`)
- `content_size` (optional): Content detail level (`medium`, `high`)
- `search_domain_filter` (optional): Limit results to a specific domain (e.g., "example.com")

## Development

### Build from Source

```bash
# Clone the repository
git clone https://github.com/cnjack/openclaw-bigmode-websarch.git
cd openclaw-bigmode-websarch

# Install dependencies
pnpm install

# Build
pnpm build

# Run type checking
pnpm lint
```

### Project Structure

```
.
├── index.ts              # Plugin source code
├── index.js              # Compiled JavaScript
├── openclaw.plugin.json  # Plugin manifest
├── package.json          # Package configuration
└── tsconfig.json         # TypeScript configuration
```

## Reference

- [BigModel Web Search API Documentation](https://docs.bigmodel.cn/api-reference/%E5%B7%A5%E5%85%B7-api/%E7%BD%91%E7%BB%9C%E6%90%9C%E7%B4%A2)
- [OpenClaw Documentation](https://openclaw.ai/)
- [OpenClaw Plugin Development Guide](https://openclaw.ai/docs/plugins)

## License

MIT

## Author

Jack

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
