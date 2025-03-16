<div align="center">
  <img src="public/hero.png" alt="Moodflix Banner" width="400" />
  
  # Moodflix - Modern Movie Discovery Platform
  
  <p>A Netflix-inspired movie discovery platform built with React.js, Appwrite, and TailwindCSS</p>

  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=Appwrite&logoColor=white" alt="Appwrite" />
  </div>
</div>

## 🎬 Overview

Moodflix is a modern movie discovery platform that combines the power of React.js with Appwrite's backend capabilities to deliver a Netflix-like experience. Perfect for movie enthusiasts and developers looking to learn modern web development practices.

## ✨ Key Features

### For Users
- 🔍 **Smart Search**: Real-time movie search with debouncing
- 📈 **Trending Movies**: Dynamic algorithm-based trending section
- 🎯 **Rich Movie Details**: 
  - Cast information
  - Ratings and reviews
  - Release dates
  - Movie overviews
  - Similar movie recommendations
- 💫 **Modern UI/UX**:
  - Netflix-style hover effects
  - Smooth transitions
  - Responsive design
  - Dynamic loading states

### For Developers
- 🏗️ **Clean Architecture**: Well-organized project structure
- 🔄 **Reusable Components**: Modular and maintainable code
- 📱 **Responsive Design**: Mobile-first approach
- 🚀 **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: 
  - React.js with Vite
  - TailwindCSS for styling
  - React Router for navigation
- **Backend**: 
  - Appwrite for backend services
  - TMDB API for movie data
- **Development**:
  - ESLint for code quality
  - Prettier for code formatting
  - Vite for fast development

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite account
- TMDB API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/moodflix.git
cd moodflix
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

4. **Start the development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard/      # Movie card component
│   ├── Search/         # Search component
│   └── ...
├── pages/              # Page components
│   ├── Home/          
│   └── MovieDetail/    
├── styles/             # Global styles
├── utils/              # Utility functions
└── appwrite.js         # Appwrite configuration
```

## 🔧 Configuration

### Appwrite Setup

1. Create an account on [Appwrite](https://appwrite.io/)
2. Create a new project
3. Set up a database with the following schema:
   - `query` (string)
   - `title` (string)
   - `poster_url` (string)
   - `movie_id` (string)
   - `count` (number)

### TMDB Setup

1. Create an account on [TMDB](https://www.themoviedb.org/)
2. Get your API key from the settings
3. Add the API key to your environment variables
