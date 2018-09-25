import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('../common/overrides.css');

export default createTheme({
  primary: '#1F2022',
  secondary: 'white',
  tertiary: '#03A9FC',
  quartenary: '#CECECE',
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica',
});
