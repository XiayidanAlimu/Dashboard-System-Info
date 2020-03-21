import Load                    from '@/view/dashbord/index.vue';
import TimeLine                from '@/view/dashbord/timeLine.vue';
import Gauge                   from '@/view/dashbord/gauge.vue';
import Empty                   from '@/view/dashbord/empty.vue';

const Router = [{
  path: '/',
  name: "Dashbord",
  meta: {
    title: "CPU Load Dashbord",
    icon: 'el-icon-s-help'
  },
  component: Load,
  redirect: {
    name: 'timeLine',
  },
  children: [{
    path: '/gauge',
    name: 'gauge',
    component: Gauge,
    meta: {
      title: 'Current'
    }
  }, {
    path: '/timeLine',
    name: 'timeLine',
    component: TimeLine,
    meta: {
      title: 'Time Series Data'
    }
  }, {
    path: '/empty',
    name: 'empty',
    component: Empty,
    meta: {
      title: 'Empty'
    }
  }]
}];

export default Router;
