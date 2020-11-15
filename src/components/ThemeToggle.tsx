import * as React from 'react';

const THEMES = ['light', 'dark', 'green'];

function ThemeToggle() {
    // const [theme, setTheme] = React.useState<'light' | 'dark' | 'green'>('light');
    const [themeIdx, setThemeIdx] = React.useState<number>(0);

    const nextTheme = () => {
        if( themeIdx === THEMES.length - 1) {
            setThemeIdx(0);
            return;
        }
        setThemeIdx( themeIdx +  1)
    }

    React.useEffect(() => {
      document.body.dataset.theme = THEMES[themeIdx]
    }, [themeIdx])

  return (
      <button onClick={() => nextTheme()}>
        Toggle
      </button>


  );
}

export default ThemeToggle;
