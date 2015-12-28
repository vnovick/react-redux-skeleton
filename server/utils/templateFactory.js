/**
 * Created by vladimirn on 11/27/15.
 */
import fs from 'fs';
import _ from 'lodash';

export default (templateName = '') => {
    return _.template(fs.readFileSync(`views/pages/${templateName}`, {'encoding': 'utf8'}));
}
