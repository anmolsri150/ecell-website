<template>
  <div>
    <vheader/>
    <section id="page-title">
      <div class="container clearfix">
        <h1>Blog</h1>
        <span>Our Latest News</span>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div id="posts" class="small-thumbs">
            <div class="entry clearfix">
              <div class="entry-image">
                <a href="/static/images/blog/full/17.jpg" data-lightbox="image"><img class="image_fade" src="/static/images/blog/small/17.jpg" alt="Standard Post with Image"></a>
              </div>
              <div class="entry-c">
                <div class="entry-title">
                  <h2><a href="blog-single.html">This is a Standard post with a Preview Image</a></h2>
                </div>
                <ul class="entry-meta clearfix">
                  <li><i class="icon-calendar3"></i> 10th February 2014</li>
                  <li><a href="#"><i class="icon-user"></i> admin</a></li>
                  <li><i class="icon-folder-open"></i> <a href="#">General</a>, <a href="#">Media</a></li>
                  <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 13</a></li>
                  <li><a href="#"><i class="icon-camera-retro"></i></a></li>
                </ul>
                <div class="entry-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in. Eligendi, deserunt, blanditiis est quisquam doloribus voluptate id aperiam ea ipsum magni aut perspiciatis rem voluptatibus officia eos rerum deleniti quae nihil facilis repellat atque vitae voluptatem libero at eveniet veritatis ab facere.</p>
                  <a href="blog-single.html" class="more-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="entry clearfix">
              <div class="entry-image">
                <iframe src="http://player.vimeo.com/video/87701971" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </div>
              <div class="entry-c">
                <div class="entry-title">
                  <h2><a href="blog-single-full.html">This is a Standard post with an Embedded Video</a></h2>
                </div>
                <ul class="entry-meta clearfix">
                  <li><i class="icon-calendar3"></i> 16th February 2014</li>
                  <li><a href="#"><i class="icon-user"></i> admin</a></li>
                  <li><i class="icon-folder-open"></i> <a href="#">Videos</a>, <a href="#">News</a></li>
                  <li><a href="blog-single-full.html#comments"><i class="icon-comments"></i> 19</a></li>
                  <li><a href="#"><i class="icon-film"></i></a></li>
                </ul>
                <div class="entry-content">
                  <p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis placeat quo unde reprehenderit eum facilis vitae.</p>
                  <a href="blog-single-full.html" class="more-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="entry clearfix">
              <div class="entry-image">
                <div class="fslider" data-arrows="false" data-lightbox="gallery">
                  <div class="flexslider">
                    <div class="slider-wrap">
                      <div class="slide"><a href="/static/images/blog/full/10.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/blog/small/10.jpg" alt="Standard Post with Gallery"></a></div>
                      <div class="slide"><a href="/static/images/blog/full/20.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/blog/small/20.jpg" alt="Standard Post with Gallery"></a></div>
                      <div class="slide"><a href="/static/images/blog/full/21.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/blog/small/21.jpg" alt="Standard Post with Gallery"></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="entry-c">
                <div class="entry-title">
                  <h2><a href="blog-single-small.html">This is a Standard post with a Slider Gallery</a></h2>
                </div>
                <ul class="entry-meta clearfix">
                  <li><i class="icon-calendar3"></i> 24th February 2014</li>
                  <li><a href="#"><i class="icon-user"></i> admin</a></li>
                  <li><i class="icon-folder-open"></i> <a href="#">Gallery</a>, <a href="#">Media</a></li>
                  <li><a href="blog-single-small.html#comments"><i class="icon-comments"></i> 21</a></li>
                  <li><a href="#"><i class="icon-picture"></i></a></li>
                </ul>
                <div class="entry-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et explicabo tenetur voluptate rerum molestiae eaque possimus exercitationem eligendi fuga. Maiores, sunt eveniet doloremque porro hic exercitationem distinctio sequi adipisci.</p>
                  <a href="blog-single-small.html" class="more-link">Read More</a>
                </div>
              </div>
            </div>
            <div class="entry clearfix">
              <div class="entry-c">
                <div class="entry-image">
                  <blockquote>
                    <p>"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity."</p>
                  </blockquote>
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
  name: 'blogs'
}
</script>

<style scoped>

</style>
