<template>
  <div>
    <vheader/>
    <section id="page-title">
      <div class="container clearfix">
        <h1>Event Registration</h1>
        <span>Forms Widget</span>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Widgets</a></li>
          <li class="breadcrumb-item active" aria-current="page">Event Registration Form</li>
        </ol>
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="form-widget">
            <div class="form-result"></div>
            <div class="row">
              <div class="col-lg-6">
                <form class="row" id="event-registration" action="http://themes.semicolonweb.com/html/canvas/include/form.php" method="post" enctype="multipart/form-data">
                  <div class="form-process"></div>
                  <div class="col-6 form-group">
                    <label>First Name</label>
                    <input type="text" name="corporate-first-name" id="corporate-first-name" class="form-control required" value="" placeholder="First Name">
                  </div>
                  <div class="col-6 form-group">
                    <label>Last Name</label>
                    <input type="text" name="corporate-last-name" id="corporate-last-name" class="form-control required" value="" placeholder="Last Name">
                  </div>
                  <div class="col-12 form-group">
                    <label>Email:</label>
                    <input type="email" name="corporate-email" id="corporate-email" class="form-control required" value="" placeholder="Email Address">
                  </div>
                  <div class="col-6 form-group">
                    <label>Phone Number</label>
                    <input type="text" name="muj-student-phone-number" id="muj-student-phone-number" class="form-control required" value="" placeholder="Phone Number">
                  </div>
                  <div class="col-6 form-group">
                    <label>Whatsapp Number</label>
                    <input type="text" name="muj-student-whatsapp-number" id="muj-student-whatsapp-number" class="form-control required" value="" placeholder="Whatsapp Number">
                  </div>
                  <div class="col-6 form-group">
                    <label>Company Name</label>
                    <input type="text" name="corporate-company-name" id="corporate-company-name" class="form-control required" value="" placeholder="Company Name">
                  </div>
                  <div class="col-6 form-group">
                    <label>Your Position</label>
                    <input type="text" name="corporate-position" id="corporate-position" class="form-control required" value="" placeholder="Position">
                  </div>
                  <div class="col-6 form-group">
                    <label>City</label>
                    <input type="text" name="corporate-city" id="corporate-city" class="form-control required" value="" placeholder="City">
                  </div>
                  <div class="col-12">
                    <button type="submit" name="event-registration-submit" class="btn btn-secondary">Register</button>
                  </div>
                  <input type="hidden" name="prefix" value="event-registration-">
                </form>
              </div>
              <div class="col-lg-6 pl-lg-4">
                <p><span class="dropcap">F</span>oster best practices effectiveness inspire breakthroughs solve immunize turmoil. Policy dialogue peaceful The Elders rural global support. Process inclusive innovate readiness, public sector complexity. Lifting people up cornerstone partner, technology working families civic engagement activist recognize potential global network. Countries tackling solution respond change-makers tackle. Assistance, giving; fight against malnutrition experience in the field lasting change scalable. Empowerment long-term, fairness policy community progress social responsibility; Cesar Chavez recognition. Expanding community ownership visionary indicator pursue these aspirations accessibility. Achieve; worldwide, life-saving initiative facilitate. New approaches, John Lennon humanitarian relief fundraise vaccine Jane Jacobs community health workers Oxfam. Our ambitions informal economies.</p>
                <blockquote class="topmargin bottommargin">
                  <p>Human rights healthcare immunize; advancement grantees. Medical supplies; meaningful, truth technology catalytic effect. Promising development capacity building international enable poverty.</p>
                </blockquote>
                <div class="col_full nobottommargin">
                  <p>Provide, Aga Khan, interconnectivity governance fairness replicable, new approaches visionary implementation. End hunger evolution, future promising development youth. Public sector, small-scale farmers; harness facilitate gender. Contribution dedicated global change movements, prosperity accelerate progress citizens of change. Elevate; accelerate reduce child mortality; billionaire philanthropy fluctuation, plumpy'nut care opportunity catalyze. Partner deep.</p>
                </div>
                <div class="col_full nobottommargin">
                  <p>Frontline harness criteria governance freedom contribution. Campaign Angelina Jolie natural resources, Rockefeller peaceful philanthropy human potential. Justice; outcomes reduce carbon emissions nonviolent resistance human being. Solve innovate aid communities; benefit truth rural development UNICEF meaningful work. Generosity Action Against Hunger relief; many voices impact crisis situation poverty pride. Vaccine carbon.</p>
                </div>
                <div class="clear"></div>
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
  name: 'corporate'
}
</script>

<style scoped>

</style>
