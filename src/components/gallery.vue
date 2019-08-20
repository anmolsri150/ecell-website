<template>
  <div>
    <vheader/>
    <section id="page-title">
      <div class="container clearfix">
        <h1>Gallery</h1>
        <span> Gallery of Our Events and Fests </span>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Shortcodes</a></li>
          <li class="breadcrumb-item active" aria-current="page">Gallery</li>
        </ol>
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">

          <div class="col_full clearfix">
            <h3>E-Cell and E-Conclave</h3>
            <div class="masonry-thumbs grid-4" data-big="4" data-lightbox="gallery">
              <a href="/static/images/portfolio/full/1.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/1.jpg" alt="Gallery Thumb 1"></a>
              <a href="/static/images/portfolio/full/2.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/2.jpg" alt="Gallery Thumb 2"></a>
              <a href="/static/images/portfolio/full/3.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/3.jpg" alt="Gallery Thumb 3"></a>
              <a href="/static/images/portfolio/full/4.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/4.jpg" alt="Gallery Thumb 4"></a>
              <a href="/static/images/portfolio/full/5.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/5.jpg" alt="Gallery Thumb 5"></a>
              <a href="/static/images/portfolio/full/6.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/6.jpg" alt="Gallery Thumb 6"></a>
              <a href="/static/images/portfolio/full/7.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/7.jpg" alt="Gallery Thumb 7"></a>
              <a href="/static/images/portfolio/full/9.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/9.jpg" alt="Gallery Thumb 9"></a>
              <a href="/static/images/portfolio/full/10.jpg" data-lightbox="gallery-item"><img class="image_fade" src="/static/images/portfolio/4/10.jpg" alt="Gallery Thumb 10"></a>
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
  name: 'gallery'
}
</script>

<style scoped>

</style>
