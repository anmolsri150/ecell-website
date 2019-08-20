<template>
  <div>
    <vheader/>
    <section id="page-title">
      <div class="container clearfix">
        <h1>Contact</h1>
        <span>Get in Touch with Us</span>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="col_half">
            <div class="fancy-title title-dotted-border">
              <h3>Send us an Email</h3>
            </div>
            <div class="form-widget">
              <div class="form-result"></div>
              <form class="nobottommargin" id="template-contactform" name="template-contactform" action="http://themes.semicolonweb.com/html/canvas/include/form.php" method="post">
                <div class="form-process"></div>
                <div class="col_one_third">
                  <label for="template-contactform-name">Name <small>*</small></label>
                  <input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="sm-form-control required" />
                </div>
                <div class="col_one_third">
                  <label for="template-contactform-email">Email <small>*</small></label>
                  <input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email sm-form-control" />
                </div>
                <div class="col_one_third col_last">
                  <label for="template-contactform-phone">Phone</label>
                  <input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" class="sm-form-control" />
                </div>
                <div class="clear"></div>
                <div class="col_two_third">
                  <label for="template-contactform-subject">Subject <small>*</small></label>
                  <input type="text" id="template-contactform-subject" name="subject" value="" class="required sm-form-control" />
                </div>

                <div class="clear"></div>
                <div class="col_full">
                  <label for="template-contactform-message">Message <small>*</small></label>
                  <textarea class="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30"></textarea>
                </div>
                <div class="col_full hidden">
                  <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
                </div>
                <div class="col_full">
                  <div class="g-recaptcha" data-sitekey="6LfijgUTAAAAACPt-XfRbQszAKAJY0yZDjjhMUQT"></div>
                </div>
                <div class="col_full">
                  <button name="submit" type="submit" id="submit-button" tabindex="5" value="Submit" class="button button-3d nomargin">Submit</button>
                </div>
                <input type="hidden" name="prefix" value="template-contactform-">
              </form>
            </div>
          </div>
          <div class="col_half col_last">
            <section id="google-map" class="gmap" style="height: 410px;"></section>
          </div>
          <div class="clear"></div>
          <div class="row clear-bottommargin">
            <div class="col-lg-3 col-md-6 bottommargin clearfix">
              <div class="feature-box fbox-center fbox-bg fbox-plain">
                <div class="fbox-icon">
                  <a href="#"><i class="icon-map-marker2"></i></a>
                </div>
                <h3>Our Headquarters<span class="subtitle">Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007</span></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 bottommargin clearfix">
              <div class="feature-box fbox-center fbox-bg fbox-plain">
                <div class="fbox-icon">
                  <a href="#"><i class="icon-phone3"></i></a>
                </div>
                <h3>Speak to Us<span class="subtitle">+919709218558</span></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 bottommargin clearfix">
              <div class="feature-box fbox-center fbox-bg fbox-plain">
                <div class="fbox-icon">
                  <a href="https://in.linkedin.com/in/ecellmuj"><i class="icon-linkedin2"></i></a>
                </div>
                <h3>Follow on linkedin</h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 bottommargin clearfix">
              <div class="feature-box fbox-center fbox-bg fbox-plain">
                <div class="fbox-icon">
                  <a href="https://www.facebook.com/mujecell/"><i class="icon-facebook2"></i></a>
                </div>
                <h3>Follow on Facebook</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <vfooter/>
  </div>
</template>

<script src="../../../www.google.com/recaptcha/api.js" async defer></script>
<script>
export default {
  name: 'contactus'
}
</script>

<style scoped>

</style>
