/**
 * Created by vladimirn on 11/27/15.
 */
 import _ from 'lodash';
 import getTemplate from './../utils/templateFactory';
 import getBundle from './../utils/bundler';
 const VIEW = 'app.jade';
export default (req, res) => {
        console.log(getBundle())
        let output = {
            bundle: getBundle(),
            pdo: {}
        }
        res.render('app', output);
}
