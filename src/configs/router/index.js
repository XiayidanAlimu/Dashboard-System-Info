import Dashbord from '@/view/dashbord/index.vue';
import IMGS from '@/view/img/index.vue';
import Balloon from '@/view/img/balloon.vue';
import Carsule from '@/view/img/carsule.vue';
import Rabbit from '@/view/img/rabbit.vue';
import Test from '@/view/test/index.vue';

const Router = [{
  path: '/',
  name: 'dashbord',
  component: Dashbord,
  meta: {
    title: 'Dashbord',
    icon: 'el-icon-s-help'
  }
}, {
  path: '/imgs',
  name: 'imgs',
  meta: {
    title: 'IMGS',
    icon: 'el-icon-camera'
  },
  component: IMGS,
  redirect: {
    name: 'balloon',
  },
  children: [{
    path: '/imgs/balloon',
    name: 'balloon',
    component: Balloon,
    meta: {
      title: 'Ballon'
    }
  }, {
    path: '/imgs/carsule',
    name: 'carsule',
    component: Carsule,
    meta: {
      title: 'Carsule'
    }
  }, {
    path: '/imgs/rabbit',
    name: 'rabbit',
    component: Rabbit,
    meta: {
      title: 'Rabbit'
    }
  }]
}, {
  path: '/signal',
  name: 'signal',
  component: IMGS,
  meta: {
    title: 'Signale',
    icon: 'el-icon-attract'
  },
}, {
  path: '/imgs/img-3',
  name: 'img-3',
  component: Carsule,
  meta: {
    title: 'IMG3'
  }
}, {
  path: '/list',
  name: 'test',
  component: Test,
  meta: {
    title: 'Test',
    icon: 'el-icon-news'
  }
}];

export default Router;
