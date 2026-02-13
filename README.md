# Kanban Board

A modern, interactive Kanban board application built with React and Vite for efficient task management and workflow visualization.

## 📋 Features

- **Drag and Drop**: Intuitive task management with drag-and-drop functionality
- **Multiple Columns**: Organize tasks across different workflow stages
- **Task Cards**: Create, edit, and manage task cards with detailed information
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 🛠️ Technologies Used

- **React** - UI library for building interactive user interfaces
- **Vite** - Next-generation frontend build tool
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd Week_5/kanban-board
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

## 🚀 Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
pnpm build
```

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```
kanban-board/
├── src/
│   ├── components/
│   │   ├── Board.jsx      # Main board component
│   │   ├── Column.jsx     # Column component for task organization
│   │   └── TaskCard.jsx   # Individual task card component
│   ├── assets/            # Static assets
│   ├── App.jsx            # Root application component
│   ├── App.css            # Application styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Public static files
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Project dependencies and scripts
```

## 🧩 Components

- **Board**: Main container managing the overall Kanban board layout
- **Column**: Represents individual workflow stages (e.g., To Do, In Progress, Done)
- **TaskCard**: Individual task items that can be moved between columns

## 📝 License

This project is part of Week 5 coursework.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
