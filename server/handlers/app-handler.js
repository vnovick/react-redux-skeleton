/**
 * Created by vladimirn on 11/27/15.
 */
 import _ from 'lodash';
 import getTemplate from './../utils/templateFactory';
 import getBundle from './../utils/bundler';
 const VIEW = 'app.ejs';

export default (req, res) => {
        console.log(getBundle())
        let template = getTemplate(VIEW);
        let output = template({
            bundle: getBundle(),
            pdo: JSON.stringify({
                page: {
                    type: 'app'
                }
            }),
            query: req.query,
            ref: encodeURIComponent(req.get('referer')||''),
            source:encodeURIComponent(req.host)
        });
        res.send(200, output);
}
