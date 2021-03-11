import Vue from 'vue'
import VueRouter from 'vue-router'

// amplify configuration
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from './aws-exports'
import Vuelidate from 'vuelidate'

Amplify.configure(aws_exports);

Amplify.configure({
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
});

// Vue components
import Auth from './components/Auth.vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Protected from './components/Protected.vue'
import Profile from './components/Profile.vue'
import Tasks from './components/Tasks.vue'
import Family from './components/Family.vue'
import myCalendar from './components/Calendar.vue'

//PrimeVUE
import PrimeVue from 'primevue/config';

import AutoComplete from 'primevue/autocomplete/AutoComplete';
import Accordion from 'primevue/accordion/Accordion';
import AccordionTab from 'primevue/accordiontab/AccordionTab';
import Avatar from 'primevue/avatar/Avatar';
import AvatarGroup from 'primevue/avatargroup/AvatarGroup';
import Badge from 'primevue/badge/Badge';
import BadgeDirective from 'primevue/badgedirective/BadgeDirective';
import BlockUI from 'primevue/blockui/BlockUI';
import Breadcrumb from 'primevue/breadcrumb/Breadcrumb';
import Button from 'primevue/button/Button';
import Calendar from 'primevue/calendar/Calendar';
import Card from 'primevue/card/Card';
import Carousel from 'primevue/carousel/Carousel';
import CascadeSelect from 'primevue/cascadeselect/CascadeSelect';
import Chart from 'primevue/chart/Chart';
import Checkbox from 'primevue/checkbox/Checkbox';
import Chip from 'primevue/chip/Chip';
import Chips from 'primevue/chips/Chips';
import ColorPicker from 'primevue/colorpicker/ColorPicker';
import Column from 'primevue/column/Column';
import ColumnGroup from 'primevue/columngroup/ColumnGroup';
import ConfirmDialog from 'primevue/confirmdialog/ConfirmDialog';
import ConfirmPopup from 'primevue/confirmpopup/ConfirmPopup';
import ConfirmationService from 'primevue/confirmationservice/ConfirmationService';
import ContextMenu from 'primevue/contextmenu/ContextMenu';
import DataTable from 'primevue/datatable/DataTable';
import DataView from 'primevue/dataview/DataView';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions/DataViewLayoutOptions';
import DeferredContent from 'primevue/deferredcontent/DeferredContent';
import Dialog from 'primevue/dialog/Dialog';
import Divider from 'primevue/divider/Divider';
import Dropdown from 'primevue/dropdown/Dropdown';
import Editor from 'primevue/editor/Editor';
import Fieldset from 'primevue/fieldset/Fieldset';
import FileUpload from 'primevue/fileupload/FileUpload';
//import FullCalendar from 'primevue/fullcalendar/FullCalendar';
import InlineMessage from 'primevue/inlinemessage/InlineMessage';
import Inplace from 'primevue/inplace/Inplace';
import InputMask from 'primevue/inputmask/InputMask';
import InputNumber from 'primevue/inputnumber/InputNumber';
import InputSwitch from 'primevue/inputswitch/InputSwitch';
import InputText from 'primevue/inputtext/InputText';
import Knob from 'primevue/knob/Knob';
import Listbox from 'primevue/listbox/Listbox';
import MegaMenu from 'primevue/megamenu/MegaMenu';
import Menu from 'primevue/menu/Menu';
import Menubar from 'primevue/menubar/Menubar';
import Message from 'primevue/message/Message';
import MultiSelect from 'primevue/multiselect/MultiSelect';
import OrderList from 'primevue/orderlist/OrderList';
import OrganizationChart from 'primevue/organizationchart/OrganizationChart';
import OverlayPanel from 'primevue/overlaypanel/OverlayPanel';
import Paginator from 'primevue/paginator/Paginator';
import Panel from 'primevue/panel/Panel';
import PanelMenu from 'primevue/panelmenu/PanelMenu';
import Password from 'primevue/password/Password';
import PickList from 'primevue/picklist/PickList';
import ProgressBar from 'primevue/progressbar/ProgressBar';
import ProgressSpinner from 'primevue/progressspinner/ProgressSpinner';
import Rating from 'primevue/rating/Rating';
import RadioButton from 'primevue/radiobutton/RadioButton';
import Row from 'primevue/row/Row';
import Ripple from 'primevue/ripple/Ripple';
import ScrollPanel from 'primevue/scrollpanel/ScrollPanel';
import ScrollTop from 'primevue/scrolltop/ScrollTop';
import SelectButton from 'primevue/selectbutton/SelectButton';
import Skeleton from 'primevue/skeleton/Skeleton';
import Slider from 'primevue/slider/Slider';
import Sidebar from 'primevue/sidebar/Sidebar';
import SplitButton from 'primevue/splitbutton/SplitButton';
import Splitter from 'primevue/splitter/Splitter';
import SplitterPanel from 'primevue/splitterpanel/SplitterPanel';
import Steps from 'primevue/steps/Steps';
import TabMenu from 'primevue/tabmenu/TabMenu';
import TabView from 'primevue/tabview/TabView';
import TabPanel from 'primevue/tabpanel/TabPanel';
import Tag from 'primevue/tag/Tag';
import Terminal from 'primevue/terminal/Terminal';
import Textarea from 'primevue/textarea/Textarea';
import TieredMenu from 'primevue/tieredmenu/TieredMenu';
import Timeline from 'primevue/timeline/Timeline';
import Tree from 'primevue/tree/Tree';
import TreeTable from 'primevue/treetable/TreeTable';
import Toast from 'primevue/toast/Toast';
import ToastService from 'primevue/toastservice/ToastService';
import Toolbar from 'primevue/toolbar/Toolbar';
import Tooltip from 'primevue/tooltip/Tooltip';
import ToggleButton from 'primevue/togglebutton/ToggleButton';
import TriStateCheckbox from 'primevue/tristatecheckbox/TriStateCheckbox';
import Galleria from 'primevue/galleria/Galleria';

Vue.component('Accordion', Accordion);
Vue.component('AccordionTab', AccordionTab);
Vue.component('Avatar', Avatar);
Vue.component('AvatarGroup', AvatarGroup);
Vue.component('AutoComplete', AutoComplete);
Vue.component('Badge', Badge);
Vue.component('BlockUI', BlockUI);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Button', Button);
Vue.component('Calendar', Calendar);
Vue.component('Card', Card);
Vue.component('Carousel', Carousel);
Vue.component('CascadeSelect', CascadeSelect);
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('Chip', Chip);
Vue.component('Chips', Chips);
Vue.component('ColorPicker', ColorPicker);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('ConfirmDialog', ConfirmDialog);
Vue.component('ConfirmPopup', ConfirmPopup);
Vue.component('ContextMenu', ContextMenu);
Vue.component('DataTable', DataTable);
Vue.component('DataView', DataView);
Vue.component('DataViewLayoutOptions', DataViewLayoutOptions);
Vue.component('DeferredContent', DeferredContent);
Vue.component('Dialog', Dialog);
Vue.component('Divider', Divider);
Vue.component('Dropdown', Dropdown);
Vue.component('Editor', Editor);
Vue.component('Fieldset', Fieldset);
Vue.component('FileUpload', FileUpload);
//Vue.component('FullCalendar', FullCalendar);
Vue.component('InlineMessage', InlineMessage);
Vue.component('Inplace', Inplace);
Vue.component('InputMask', InputMask);
Vue.component('InputNumber', InputNumber);
Vue.component('InputSwitch', InputSwitch);
Vue.component('InputText', InputText);
Vue.component('Knob', Knob);
Vue.component('Listbox', Listbox);
Vue.component('MegaMenu', MegaMenu);
Vue.component('Menu', Menu);
Vue.component('Menubar', Menubar);
Vue.component('Message', Message);
Vue.component('MultiSelect', MultiSelect);
Vue.component('OrderList', OrderList);
Vue.component('OrganizationChart', OrganizationChart);
Vue.component('OverlayPanel', OverlayPanel);
Vue.component('Paginator', Paginator);
Vue.component('Panel', Panel);
Vue.component('PanelMenu', PanelMenu);
Vue.component('Password', Password);
Vue.component('PickList', PickList);
Vue.component('ProgressBar', ProgressBar);
Vue.component('ProgressSpinner', ProgressSpinner);
Vue.component('RadioButton', RadioButton);
Vue.component('Rating', Rating);
Vue.component('Row', Row);
Vue.component('ScrollPanel', ScrollPanel);
Vue.component('ScrollTop', ScrollTop);
Vue.component('SelectButton', SelectButton);
Vue.component('Slider', Slider);
Vue.component('Sidebar', Sidebar);
Vue.component('Skeleton', Skeleton);
Vue.component('SplitButton', SplitButton);
Vue.component('Splitter', Splitter);
Vue.component('SplitterPanel', SplitterPanel);
Vue.component('Steps', Steps);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
Vue.component('TabMenu', TabMenu);
Vue.component('Tag', Tag);
Vue.component('Terminal', Terminal);
Vue.component('Textarea', Textarea);
Vue.component('TieredMenu', TieredMenu);
Vue.component('Timeline', Timeline);
Vue.component('Toast', Toast);
Vue.component('Toolbar', Toolbar);
Vue.component('ToggleButton', ToggleButton);
Vue.component('Tree', Tree);
Vue.component('TreeTable', TreeTable);
Vue.component('TriStateCheckbox', TriStateCheckbox);
Vue.component('Galleria', Galleria);


// Vuex store
import store from './store'

// Primeflex
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/nova/theme.css';




// global styles
//require('./assets/main.css')


// route configuration
const routes = [
  { path: '/', component: Auth },
  { path: '/home', component: Home },
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} },
  { path: '/tasks', component: Tasks, meta: { requiresAuth: true} },
  { path: '/family', component: Family, meta: { requiresAuth: true} },
  { path: '/calendar', component: myCalendar, meta: { requiresAuth: true} },
]

// router definition
const router = new VueRouter({
  routes
})

// implement protected routes for only signed in users
router.beforeResolve((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        next()
      } 
    }).catch((e) => {
      console.log('You are trying to access a protected route. Please sign in.', e)
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        }
      });
    });
  }
  next()
})
Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(PrimeVue, {ripple: true});
Vue.use(Vuelidate);
Vue.use(ToastService);
Vue.use(ConfirmationService);

Vue.directive('badge', BadgeDirective);
Vue.directive('tooltip', Tooltip);
Vue.directive('ripple', Ripple);

Vue.prototype.$appState = Vue.observable({inputStyle: 'outlined', darkTheme: false});

Vue.config.productionTip = false;


router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

new Vue({
  render: v => v(App),
  router: router,
  store
}).$mount('#app')