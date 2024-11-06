import Home from '~/pages/home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Search from '~/pages/search';

// layout
import { HeaderOnly } from '~/components/layout';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
