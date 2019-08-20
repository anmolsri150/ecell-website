<template>
  <div>
    <vheader/>
    <section id="content">
      <div class="content-wrap">
        <div class="container subscribe-widget clearfix">
          <div class="heading-block title-center nobottomborder">
            <h1>We are currently Under Construction</h1>
            <span>Please check back again within Some Days as We're Pretty Close</span>
          </div>
          <div id="countdown-ex1" class="countdown countdown-large divcenter bottommargin" style="max-width:700px;"></div>
          <div class="clear"></div>
          <div class="progress topmargin divcenter" style="height: 10px; max-width:600px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only">80% Complete</span>
            </div>
          </div>
          <div class="divider divider-center divider-short divider-margin"><i class="icon-time"></i></div>
          <div class="widget-subscribe-form-result"></div>
          <form id="widget-subscribe-form" action="http://themes.semicolonweb.com/html/canvas/include/subscribe.php" role="form" method="post" class="nobottommargin">
            <div class="input-group input-group-lg divcenter" style="max-width:600px;">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="icon-email2"></i></div>
              </div>
              <input type="email" name="widget-subscribe-form-email" class="form-control required email" placeholder="Enter your Email">
              <div class="input-group-append">
                <button class="btn btn-secondary" type="submit">Get Notified</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <vfooter/>
  </div>
</template>

<script>
export default {
  name: 'comingsoon'
}
</script>

<style scoped>

</style>
