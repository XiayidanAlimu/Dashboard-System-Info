import Load                    from '@/view/dashbord/index.vue';
import TimeLine                from '@/view/dashbord/timeLine.vue';
import Gauge                   from '@/view/dashbord/gauge.vue';

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
  }]
}];

export default Router;
