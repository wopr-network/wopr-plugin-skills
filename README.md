# @wopr-network/wopr-plugin-skills

Skills discovery, state management, and REST API for WOPR.

## Features

- **Skill Discovery**: Automatically discover skills from multiple sources (managed, workspace, bundled)
- **State Management**: Track enabled/disabled state and usage statistics
- **REST API**: HTTP endpoints for managing skills
- **Context Provider**: Inject available skills into AI prompts
- **SQL Storage**: Persistent skill state using WOPR's plugin storage API

## Installation

```bash
npm install @wopr-network/wopr-plugin-skills
```

## Usage

The plugin is automatically loaded by WOPR. It registers:

- Context provider for skill injection into prompts
- REST router at `/skills` for HTTP API
- Storage schema for skill state persistence

## API Endpoints

- `GET /skills` - List all discovered skills
- `POST /skills` - Create a new skill
- `POST /skills/install` - Install skill from GitHub or URL
- `POST /skills/uninstall` - Uninstall a skill
- `DELETE /skills/:name` - Remove a skill
- `POST /skills/:name/enable` - Enable a skill
- `POST /skills/:name/disable` - Disable a skill
- `POST /skills/cache/clear` - Clear skill cache

## Development

```bash
npm run build       # Build TypeScript
npm run dev         # Watch mode
npm run lint        # Lint code
npm run format      # Format code
npm run check       # Lint + type-check
npm test            # Run tests
```

## License

MIT
