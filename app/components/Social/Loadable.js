/**
 *
 * Asynchronously loads the component for Social
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
