/**
 *
 * Asynchronously loads the component for Animation
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
