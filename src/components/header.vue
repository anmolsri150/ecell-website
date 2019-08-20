<template>
  <header id="header" class="page-section full-header">
    <div id="header-wrap">
      <div class="container clearfix">
        <div id="primary-menu-trigger"><i class="icon-reorder"></i></div>
        <div id="logo">
          <a href="index.php" class="standard-logo" data-dark-logo="static/images/logo-dark.png"><img src="/static/images/logo.png" alt="Canvas Logo"></a>
          <a href="index.php" class="retina-logo" data-dark-logo="static/images/logo-dark@2x.png"><img src="/static/images/logo%402x.png" alt="Canvas Logo"></a>
        </div>
        <nav id="primary-menu" class="dark">
          <ul>
            <li class="current">
              <router-link :to="{ path: '/'}">
                <a>
                  <div>Home</div>
                </a>
              </router-link>
<!--              <ul>-->
<!--                <li>-->
<!--                  <router-link :to="{ path: '/about-us'}">-->
<!--                    <a>-->
<!--                      <div>About us</div>-->
<!--                    </a>-->
<!--                  </router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link :to="{ path: '/vision'}">-->
<!--                    <a href="#">-->
<!--                      <div>Vision</div>-->
<!--                    </a>-->
<!--                  </router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link :to="{ path: '/'}">-->
<!--                  <a href="#">-->
<!--                    <div>Team</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link :to="{ path: '/'}">-->
<!--                  <a href="#">-->
<!--                    <div>Partners</div>-->
<!--                  </a>-->
<!--                </li>-->
<!--              </ul>-->
            </li>
            <li>
              <a href="#">
                <div>Initiatives</div>
              </a>
              <ul>
                <li>
<!--                  <router-link :to="{ path: '/initiatives/startups'}">-->
                    <a :href="baseurl+'/initiatives/startups'">
                      <div>Start-ups</div>
                    </a>
<!--                  </router-link>-->
                <li>
<!--                  <router-link :to="{ path: '/initiatives/portfolios'}">-->
                    <a :href="baseurl+'/initiatives/portfolios'">
                      <div>Portfolios</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/initiatives/startup-service-program'}">-->
                    <a :href="baseurl+'/initiatives/startup-service-program'">
                      <div>Start-up Service Program</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/initiatives/campus-ambassadors'}">-->
                    <a :href="baseurl+'/initiatives/campus-ambassadors'">
                      <div>Campus Ambasssdors</div>
                    </a>
<!--                  </router-link>-->
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <div>Events</div>
              </a>
              <ul>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                    <a :href="baseurl+'/events/calendar'">
                      <div>Events Calendar</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                    <a :href="baseurl+'/events/e-conclave'">
                      <div>E-Conclave</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/events/industrial-visits'">
                      <div>Industrial Visits</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/events/minor-events'">
                      <div>Minor Events</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/events/internfair'">
                      <div>Internfair</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/events/innovriti'">
                      <div>Innovriti</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/events/past-speakers'">
                      <div>Past Speakers</div>
                    </a>
<!--                  </router-link>-->
                </li>
              </ul>
            </li>
            <li>
<!--              <router-link :to="{ path: '/'}">-->
              <a :href="baseurl+'/blog'">
                  <div>Blogs</div>
                </a>
<!--              </router-link>-->
            </li>
            <li>
<!--              <router-link :to="{ path: '/'}">-->
              <a :href="baseurl+'/gallery'">
                  <div>Gallery</div>
                </a>
<!--              </router-link>-->
            </li>
            <li>
              <a href="#">
                <div>Get Involved</div>
              </a>
              <ul>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                    <a :href="baseurl+'/get-involved/muj-student'">
                      <div>As MUJ Student</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/get-involved/non-muj-student'">
                      <div>As non-MUJ Students</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/get-involved/alumni'">
                      <div>Alumni</div>
                    </a>
<!--                  </router-link>-->
                </li>
                <li>
<!--                  <router-link :to="{ path: '/'}">-->
                  <a :href="baseurl+'/get-involved/corporate'">
                      <div>Corporate</div>
                    </a>
<!--                  </router-link>-->
                </li>
              </ul>
            </li>
            <li>
<!--              <router-link :to="{ path: '/'}">-->
              <a :href="baseurl+'/contact-us'">
                  <div>Contact Us</div>
                </a>
<!--              </router-link>-->
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  computed: {
    baseurl () {
      return window.location.origin
    }
  }
}
</script>

<style scoped>

</style>
