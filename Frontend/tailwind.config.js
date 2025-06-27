/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#1A1A2A',
        'card-color': '#25253A',
        'nav-color': '#2A2B40',
        'primary-accent': '#5D8EFF',
        'secondary-accent': '#7B6CFF',
        'success-accent': '#2ECC71',
        'warning-accent': '#F39C12',
        'danger-accent': '#FF5E7D',
        'text-light': '#F0F0FF',
        'text-muted': '#A0A0C0',
        'divider-color': '#3A3D5A',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        destructive: 'var(--color-destructive)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
      },
      backgroundColor: {
        'highlight': 'rgba(93, 142, 255, 0.15)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #5D8EFF 0%, #3A6FE8 100%)',
        'gradient-purple': 'linear-gradient(135deg, #7B6CFF 0%, #A259FF 100%)',
        'gradient-green': 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
        'gradient-yellow': 'linear-gradient(135deg, #F9D423 0%, #FF4E50 100%)',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 8px 20px rgba(0, 0, 0, 0.25)',
        'nav': '0 2px 15px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}
