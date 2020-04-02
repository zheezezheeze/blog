import Router from 'koa-router';
import * as postsCrtl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCrtl.list);
posts.post('/', checkLoggedIn, postsCrtl.write);

const post = new Router();
post.get('/', postsCrtl.read);
post.delete('/', postsCrtl.checkOwnPost, postsCrtl.remove);
post.patch('/', postsCrtl.checkOwnPost, postsCrtl.update);

posts.use('/:id', postsCrtl.getPostById, post.routes());

export default posts;