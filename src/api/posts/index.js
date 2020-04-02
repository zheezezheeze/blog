import Router from 'koa-router';
import * as postsCrtl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCrtl.list);
posts.post('/', postsCrtl.write);

const post = new Router();
post.get('/', postsCrtl.read);
post.delete('/', postsCrtl.remove);
post.patch('/', postsCrtl.update);

posts.use('/:id', postsCrtl.checkObjectId, post.routes());

export default posts;