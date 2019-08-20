<template>
  <div>
    <vheader/>
    <section id="content">
      <div class="content-wrap">
        <div class="parallax header-stick bottommargin-lg dark" style="padding: 60px 0; background-image: url('/static/images/parallax/calendar.jpg'); height: auto;" data-bottom-top="background-position:0px 0px;" data-top-bottom="background-position:0px -500px;">
          <div class="container clearfix">
            <div class="events-calendar">
              <div class="events-calendar-header clearfix">
                <h2>Events Overview</h2>
                <h3 class="calendar-month-year">
                  <span id="calendar-month" class="calendar-month"></span>
                  <span id="calendar-year" class="calendar-year"></span>
                  <nav>
                    <span id="calendar-prev" class="calendar-prev"><i class="icon-chevron-left"></i></span>
                    <span id="calendar-next" class="calendar-next"><i class="icon-chevron-right"></i></span>
                    <span id="calendar-current" class="calendar-current" title="Got to current date"><i class="icon-reload"></i></span>
                  </nav>
                </h3>
              </div>
              <div id="calendar" class="fc-calendar-container"></div>
            </div>
          </div>
        </div>
        <div class="container clearfix">
          <div class="clear"></div>
          <div class="divider divider-center"><i class="icon-circle-blank"></i></div>
          <h3>Upcoming Events</h3>
          <div id="posts" class="events small-thumbs">
            <div class="entry clearfix">
              <div class="entry-image">
                <a href="#">
                  <img src="/static/images/events/thumbs/1.jpg" alt="Inventore voluptates velit totam ipsa tenetur">
                  <div class="entry-date">10<span>Apr</span></div>
                </a>
              </div>
              <div class="entry-c">
                <div class="entry-title">
                  <h2><a href="#">Inventore voluptates velit totam ipsa tenetur</a></h2>
                </div>
                <ul class="entry-meta clearfix">
                  <li><span class="badge badge-warning">Private</span></li>
                  <li><a href="#"><i class="icon-time"></i> 11:00 - 19:00</a></li>
                  <li><a href="#"><i class="icon-map-marker2"></i> Melbourne, Australia</a></li>
                </ul>
                <div class="entry-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga.</p>
                  <a href="#" class="btn btn-secondary" disabled="disabled">Buy Tickets</a> <a href="#" class="btn btn-danger">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <vfooter/>
  </div>
</template>

<script>
export default {
  name: 'eventscalendar'
}
</script>

<style scoped>

</style>
