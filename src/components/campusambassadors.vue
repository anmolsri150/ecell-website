<template>
  <div>
    <vheader/>
    <section id="page-title" class="page-title-parallax page-title-dark" style="background-image: url('/static/images/about/parallax.jpg'); padding: 120px 0;" data-bottom-top="background-position:0px 300px;" data-top-bottom="background-position:0px -300px;">
      <div class="container clearfix">
        <h1>Campus Ambassadors</h1>
        <span>Join our Team of Campus Ambassadors and get the chance to grow your network</span>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active" aria-current="page">Jobs</li>
        </ol>
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="col_three_fifth nobottommargin">
            <div class="fancy-title title-bottom-border">
              <h3>Who are Campus Ambassadors</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, natus voluptatibus adipisci porro magni dolore eos eius ducimus corporis quos perspiciatis quis iste, vitae autem libero ullam omnis cupiditate quam.</p>
            <div class="accordion accordion-bg clearfix">
              <div class="acctitle"><i class="acc-closed icon-ok-circle"></i><i class="acc-open icon-remove-circle"></i>Requirements</div>
              <div class="acc_content clearfix">
                <ul class="iconlist iconlist-color nobottommargin">
                  <li><i class="icon-ok"></i>B.Tech./ B.E / MCA degree in Computer Science, Engineering or a related stream.</li>
                  <li><i class="icon-ok"></i>3+ years of software development experience.</li>
                  <li><i class="icon-ok"></i>3+ years of Python / Java development projects experience.</li>
                  <li><i class="icon-ok"></i>Minimum of 4 live project roll outs.</li>
                  <li><i class="icon-ok"></i>Experience with third-party libraries and APIs.</li>
                  <li><i class="icon-ok"></i>In depth understanding and experience of either SDLC or PDLC.</li>
                  <li><i class="icon-ok"></i>Good Communication Skills</li>
                  <li><i class="icon-ok"></i>Team Player</li>
                </ul>
              </div>
              <div class="acctitle"><i class="acc-closed icon-ok-circle"></i><i class="acc-open icon-remove-circle"></i>What we Expect from you?</div>
              <div class="acc_content clearfix">
                <ul class="iconlist iconlist-color nobottommargin">
                  <li><i class="icon-plus-sign"></i>Design and build applications/ components using open source technology.</li>
                  <li><i class="icon-plus-sign"></i>Taking complete ownership of the deliveries assigned.</li>
                  <li><i class="icon-plus-sign"></i>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                  <li><i class="icon-plus-sign"></i>Work with outside data sources and API's.</li>
                  <li><i class="icon-plus-sign"></i>Unit-test code for robustness, including edge cases, usability, and general reliability.</li>
                  <li><i class="icon-plus-sign"></i>Work on bug fixing and improving application performance.</li>
                </ul>
              </div>
              <div class="acctitle"><i class="acc-closed icon-ok-circle"></i><i class="acc-open icon-remove-circle"></i>What you've got?</div>
              <div class="acc_content clearfix">You'll be familiar with agile practices and have a highly technical background, comfortable discussing detailed technical aspects of system design and implementation, whilst remaining business driven. With 5+ years of systems analysis, technical analysis or business analysis experience, you'll have an expansive toolkit of communication techniques to enable shared, deep understanding of financial and technical concepts by diverse stakeholders with varying backgrounds and needs. In addition, you will have exposure to financial systems or accounting knowledge.</div>
            </div>
            <a href="#" data-scrollto="#job-apply" class="button button-3d button-black nomargin">Apply Now</a>
            <div class="divider divider-short"><i class="icon-star3"></i></div>
          </div>
          <div class="col_two_fifth nobottommargin col_last">
            <div id="job-apply" class="heading-block highlight-me">
              <h2>Apply Now</h2>
              <span>And we'll get back to you within 48 hours.</span>
            </div>
            <div class="form-widget">
              <div class="form-result"></div>
              <form action="http://themes.semicolonweb.com/html/canvas/include/form.php" id="template-jobform" name="template-jobform" method="post" role="form">
                <div class="form-process"></div>
                <div class="col_half">
                  <label for="template-jobform-fname">First Name <small>*</small></label>
                  <input type="text" id="template-jobform-fname" name="template-jobform-fname" value="" class="sm-form-control required" />
                </div>
                <div class="col_half col_last">
                  <label for="template-jobform-lname">Last Name <small>*</small></label>
                  <input type="text" id="template-jobform-lname" name="template-jobform-lname" value="" class="sm-form-control required" />
                </div>
                <div class="clear"></div>
                <div class="col_full">
                  <label for="template-jobform-email">Email <small>*</small></label>
                  <input type="email" id="template-jobform-email" name="template-jobform-email" value="" class="required email sm-form-control" />
                </div>
                <div class="col_half">
                  <label for="template-jobform-age">Phone <small>*</small></label>
                  <input type="text" name="template-jobform-age" id="template-jobform-age" value="" size="22" tabindex="4" class="sm-form-control required" />
                </div>
                <div class="col_half col_last">
                  <label for="template-jobform-city">City <small>*</small></label>
                  <input type="text" name="template-jobform-city" id="template-jobform-city" value="" size="22" tabindex="5" class="sm-form-control required" />
                </div>
                <div class="clear"></div>
                <div class="col_full">
                  <label for="template-jobform-service">Collage Name<small>*</small></label>
                  <input type="text" name="template-jobform-position" id="template-jobform-position" size="9" class="sm-form-control required"/>
                </div>
                <div class="clear"></div>
                <div class="col_full">
                  <label for="template-jobform-website">Linkedin Profile (if any)</label>
                  <input type="text" name="template-jobform-website" id="template-jobform-website" value="" size="22" tabindex="8" class="sm-form-control" />
                </div>
                <div class="col_full">
                  <label for="template-jobform-experience">Why you want to be the Campus Ambassadors</label>
                  <textarea name="template-jobform-experience" id="template-jobform-experience" rows="3" tabindex="10" class="sm-form-control"></textarea>
                </div>
                <div class="col_full">
                  <label for="template-jobform-application">Any prior Experience <small>*</small></label>
                  <textarea name="template-jobform-application" id="template-jobform-application" rows="6" tabindex="11" class="sm-form-control required"></textarea>
                </div>
                <div class="col_full hidden">
                  <input type="text" id="template-jobform-botcheck" name="template-jobform-botcheck" value="" class="sm-form-control" />
                </div>
                <div class="col_full">
                  <button class="button button-3d button-large btn-block nomargin" name="template-jobform-apply" type="submit" value="apply">Send Application</button>
                </div>
                <input type="hidden" name="prefix" value="template-jobform-">
              </form>
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
  name: 'campusambassadors'
}
</script>

<style scoped>

</style>
