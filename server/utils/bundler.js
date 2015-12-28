/**
 * Created by vladimirn on 11/28/15.
 */
export default ()=>{
    let isDev = process.env.NODE_ENV === 'development';
    let bundle = {
        js: 'bundle.js',
        css: 'styles.css'
    };
    for (var key in bundle) {
        bundle[key] = isDev ? `http://localhost:8080/dist/${bundle[key]}` : `public/assets/${bundle[key]}`;
    }
    return bundle
}
