import Theme from '@components/theme';
import Router from '@pages/router';

import GlobalStyles from '@styles/global.styles';

export function App() {
  return (
    <Theme>
      <Router>
        <GlobalStyles />
      </Router>
    </Theme>
  );
}

export default App;
