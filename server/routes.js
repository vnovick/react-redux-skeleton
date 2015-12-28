/**
 * Created by vladimirn on 11/27/15.
 */
import webapp from './handlers/app-handler';
export default (app) => {
    app.get('/', webapp);
}
