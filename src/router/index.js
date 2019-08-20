import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Home from '@/components/Home'
import Alumni from '@/components/Alumni'
import asmujstudent from '@/components/asmujstudent'
import asnonmujstudent from '@/components/asnonmujstudent'
import blogs from '@/components/blogs'
import campusambassadors from '@/components/campusambassadors'
import comingsoon from '@/components/comingsoon'
import contactus from '@/components/contactus'
import corporate from '@/components/corporate'
import econclave from '@/components/econclave'
import eventscalendar from '@/components/eventscalendar'
import gallery from '@/components/gallery'
import industrialvisits from '@/components/industrialvisits'
import innovriti from '@/components/innovriti'
import internfair from '@/components/internfair'
import login from '@/components/login'
import maintenence from '@/components/maintenence'
import minorevents from '@/components/minorevents'
import pastspeakers from '@/components/pastspeakers'
import portfolios from '@/components/portfolios'
import profile from '@/components/profile'
import startups from '@/components/startups'
import startupsserviceprogram from '@/components/startupsserviceprogram'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/get-involved/alumni',
      name: 'Alumni',
      component: Alumni
    },
    {
      path: '/get-involved/muj-student',
      name: 'MUJ Student',
      component: asmujstudent
    },
    {
      path: '/get-involved/non-muj-student',
      name: 'Non MUJ Student',
      component: asnonmujstudent
    },
    {
      path: '/blog',
      name: 'Blog',
      component: blogs
    },
    {
      path: '/initiatives/campus-ambassadors',
      name: 'Campus Ambassadors',
      component: campusambassadors
    },
    {
      path: '/coming-soon',
      name: 'Coming Soon',
      component: comingsoon
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      component: contactus
    },
    {
      path: '/get-involved/corporate',
      name: 'Corporate',
      component: corporate
    },
    {
      path: '/events/econclave',
      name: 'E-Conclave',
      component: econclave
    },
    {
      path: '/events/calendar',
      name: 'Events Calendar',
      component: eventscalendar
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: gallery
    },
    {
      path: '/events/industrial-visits',
      name: 'Industrial Visits',
      component: industrialvisits
    },
    {
      path: '/events/innovriti',
      name: 'Innovriti',
      component: innovriti
    },
    {
      path: '/events/internfair',
      name: 'Internfair',
      component: internfair
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: maintenence
    },
    {
      path: '/events/minor-events',
      name: 'Minor Events',
      component: minorevents
    },
    {
      path: '/events/past-speakers',
      name: 'Past Speakers',
      component: pastspeakers
    },
    {
      path: '/initiatives/portfolios',
      name: 'Portfolios',
      component: portfolios
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile
    },
    {
      path: '/initiatives/startups',
      name: 'Startups',
      component: startups
    },
    {
      path: '/initiatives/startup-service-program',
      name: 'Startup Service Program',
      component: startupsserviceprogram
    }
  ]
})
