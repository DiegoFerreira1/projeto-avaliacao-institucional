/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { EmojiEmotions, EmojiPeople, LibraryAddCheck, LibraryBooksSharp, PersonOutline } from "@material-ui/icons";
import { Icon } from "@material-ui/core";
//import GerenciamentoProjetos from "views/Projetos/gerenciamentoProjetos.js";
import GerenciamentoAlunos from "views/Alunos/gerenciamentoAlunos.js";
import GerenciamentoEnderecos from "views/Enderecos/gerenciamentoEnderecos";
import GerenciamentoAvaliacao from "views/Avaliacao/gerenciamentoAvaliacao";
import GerenciamentoComponenteCurricular from "views/Curricular/gerenciamentoComponenteCurricular";

const dashboardRoutes = [
  
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/alunos",
    name: "Alunos",
    rtlName: "Alunos",
    icon: Person,
    component: GerenciamentoAlunos,
    layout: "/admin"
  },
  {
    path: "/Avaliacao",
    name: "Avaliacões",
    rtlName: "Avaliacao",
    icon: LibraryAddCheck,
    component: GerenciamentoAvaliacao,
    layout: "/admin"
  },
  {
    path: "/Curricular",
    name: "Componente Curricular",
    rtlName: "Curricular",
    icon: LibraryBooks,
    component: GerenciamentoComponenteCurricular,
    layout: "/admin"
  },
  {
    path: "/Enderecos",
    name: "Endereços",
    rtlName: "Enderecos",
    icon: LocationOn,
    component: GerenciamentoEnderecos,
    layout: "/admin"
  },
  
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
