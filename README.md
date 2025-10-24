# DPSG Phoenix UI Library

This is the DPSG Phoenix UI Library, a collection of Astro and React components built with Tailwind CSS and Shadcn UI, customized to the DPSG corporate design.

## 🚀 Project Structure

This project is structured as a UI component library.

```text
/
├── public/
├── src/
│   ├── components/           # Reusable UI components (DPSG branded wrappers around Shadcn UI)
│   │   ├── ui/               # Original Shadcn UI components (customized)
│   │   └── index.ts          # Exports all DPSG components
│   ├── layouts/              # Astro layouts
│   │   └── Layout.astro
│   ├── pages/                # Astro pages for documentation/showcase
│   │   ├── index.astro
│   │   └── components.astro
│   └── styles/               # Global CSS with Tailwind and DPSG theme
│       └── global.css
├── .gitignore
├── flake.lock
├── flake.nix
├── LICENSE
├── README.md
├── astro.config.mjs
├── components.json           # Shadcn UI configuration
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
└── tsconfig.json
```

## 📦 Installation

To use this library in your Astro project, install it via pnpm:

```bash
pnpm add dpsg-phoenix-ui
```

## 💡 Usage

You can import and use the DPSG components in your Astro or React files.

**Example (Astro component):**

```astro
---
import { DPSGButton } from 'dpsg-phoenix-ui';
---

<DPSGButton client:load text="Click Me" onClick={() => alert('Button clicked!')} />
```

**Example (React component):**

```tsx
import React from 'react';
import { DPSGButton } from 'dpsg-phoenix-ui';

const MyComponent: React.FC = () => {
  return (
    <DPSGButton text="Click Me" onClick={() => alert('Button clicked!')} />
  );
};

export default MyComponent;
```

## 🎨 Available Components

Here's a list of the currently available DPSG-branded components:

*   `DPSGButton`
*   `DPSGCard`
*   `DPSGBadge`
*   `DPSGDialog`
*   `DPSGInput`
*   `DPSGCheckbox`
*   `DPSGRadioGroup`
*   `DPSGSelect`
*   `DPSGTextarea`
*   `DPSGSwith`
*   `DPSGSilder`
*   `DPSGTable`

For detailed usage examples and props, please refer to the `src/pages/components.astro` file in this project, or the individual component files in `src/components/`.

## ⚙️ Development

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`      |
| `pnpm build`               | Build your production site to `./dist/`          |
| `pnpm build:lib`           | Builds the UI library for distribution           |
| `pnpm build:components`    | Compiles TypeScript components for the library   |
| `pnpm preview`             | Preview your build locally, before deploying     |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`     | Get help using the Astro CLI                     |

## 🤝 Contributing

Contributions are welcome! Please ensure your changes adhere to the DPSG corporate design guidelines.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).