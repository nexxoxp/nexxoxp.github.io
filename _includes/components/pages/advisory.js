const includeFormScript = require('../formScript')

module.exports = async function (data) {
    const contactFormUrl = 'https://us-central1-nexxoxp-website.cloudfunctions.net/contactUs'

    return `
      <!-- Breadcrumb -->
      <nav class="container py-4 mb-lg-2 mt-lg-3" aria-label="breadcrumb">
        <ol class="breadcrumb justify-content-center justify-content-md-start mb-0">
          <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage')}"><i class="bx bx-home-alt fs-lg me-1"></i>${this.i18n('pagesUrl.homepage.linkName')}</a>
          </li>
          <li class="breadcrumb-item">
            <a href="${this.i18n('pagesUrl.homepage.whatWeDoSection')}">${this.i18n('pagesUrl.homepage.whatWeDoSection.linkName')}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">${this.i18n('pagesUrl.advisory.linkName')}</li>
        </ol>
      </nav>


      <!-- Page title + Image -->
      <section class="container pb-5 mb-md-3 mb-lg-5">
        <div class="row align-items-center">
          <div class="col-xl-5 col-md-6 offset-xl-1 order-md-2 text-center text-md-start mb-3 mb-sm-0">
            <h2 class="h4 text-primary mb-2">${this.i18n('advisory.subtitle')}</h2>
            <h1 class="mb-4">${this.i18n('advisory.title')}</h1>
            <p class="fs-xl d-md-none d-lg-block pb-2 pb-md-4 mb-lg-3">${this.i18n('advisory.description01')}</p>
            <p class="fs-xl d-md-none d-lg-block pb-2 pb-md-4 mb-lg-3">${this.i18n('advisory.description02')}</p>
          </div>
          <div class="col-md-6 order-md-1">
            ${await this.image('services/advisory/advisory-partner.jpeg', 'Nexxo Advisory Partner', 'rounded-3')}
          </div>
        </div>
      </section>


      <!-- Services -->
      <section class="container pb-5 mb-md-3 mb-lg-5">
        <!-- Services Title -->
        <div class="row justify-content-center text-center">
          <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10">
            <h2 class="h1 mb-4">${this.i18n('advisory.slider.title')}</h2>
            <p class="text-muted mb-3 mb-lg-4">${this.i18n('advisory.slider.description')}</p>
          </div>
        </div>


        <!-- Swiper slider -->
        <div class="swiper swiper-nav-onhover mx-n2" data-swiper-options='{
          "slidesPerView": 1,
          "spaceBetween": 8,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "0": {
              "slidesPerView": 1
            },
            "560": {
              "slidesPerView": 2
            },
            "992": {
              "slidesPerView": 3
            }
          }
        }'>
          <div class="swiper-wrapper">

            <!-- Item 01 -->
            <div class="swiper-slide h-auto py-3">
              <div class="card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2">
                <div class="card-body">
                  <div class="d-table position-relative p-3 mb-3">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"></span>
                    <div class="text-primary position-relative zindex-5">
                      ${await this.image('services/advisory/advisory.png', 'M&A Advisory', 'servicesIcon', [150, 100, 50], '50w')}                     
                    </div>
                  </div>
                  <p class="fs-m d-lg-block pb-2 pb-md-4 mb-lg-3">${this.i18n('advisory.slider.item01.description')}</p>
                </div>
              </div>
            </div>

            <!-- Item 02 -->
            <div class="swiper-slide h-auto py-3">
              <div class="card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2">
                <div class="card-body">
                  <div class="d-table position-relative p-3 mb-3">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"></span>
                    <div class="text-primary position-relative zindex-5">
                        ${await this.image('services/advisory/corporate-finance.png', 'Corporate Finance', 'servicesIcon', [150, 100, 50], '50w')}                     
                    </div>
                  </div>
                  <p class="fs-m d-lg-block pb-2 pb-md-4 mb-lg-3">${this.i18n('advisory.slider.item02.description')}</p>
                </div>
              </div>
            </div>

            <!-- Item 03 -->
            <div class="swiper-slide h-auto py-3">
              <div class="card border-0 shadow-sm card-hover card-hover-primary h-100 mx-2">
                <div class="card-body">
                  <div class="d-table position-relative p-3 mb-3">
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"></span>
                    <div class="text-primary position-relative zindex-5">
                        ${await this.image('services/advisory/corporate-advisory.png', 'Corporate Advisory', 'servicesIcon', [150, 100, 50], '50w')}                                           
                    </div>
                  </div>
                 <p class="fs-m d-md-none d-lg-block pb-2 pb-md-4 mb-lg-3">${this.i18n('advisory.slider.item03.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative d-lg-none pt-2 pt-sm-3 mt-4"></div>
        </div>
      </section>


      <!-- Contact form -->
      <section class="container pb-3 mb-lg-3">
        <div class="position-relative bg-secondary rounded-3 py-5 mb-2">
          <div class="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
            <div class="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
              <p class="lead mb-2 mb-md-3">${this.i18n('advisory.contactForm.subtitle')}</p>
              <h2 class="h1 pb-3">${this.i18n('advisory.contactForm.title')}</h2>
            </div>
            <form id="contact-form" class="col-lg-6 col-md-7 offset-xl-1 needs-validation" novalidate method="POST" action="${contactFormUrl}">
              <input type="hidden" name="subject" value="Nexxoxp.com - Richiesta info Nexxo Advisory Partner"/>
              <div class="row">
                <div class="col-sm-6 mb-4">
                  <label for="name" class="form-label fs-base">${this.i18n('advisory.contactForm.fullNameField.label')}</label>
                  <input type="text" name="name" id="name" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">${this.i18n('advisory.contactForm.fullNameField.errorMessage')}</div>
                </div>
                <div class="col-sm-6 mb-4">
                  <label for="email" class="form-label fs-base">${this.i18n('advisory.contactForm.emailField.label')}</label>
                  <input type="email" name="email" id="email" class="form-control form-control-lg" required>
                  <div class="invalid-feedback">${this.i18n('advisory.contactForm.emailField.errorMessage')}</div>
                </div>
                <div class="col-12 pb-2 mb-4">
                  <label for="message" class="form-label fs-base">${this.i18n('advisory.contactForm.messageField.label')}</label>
                  <textarea id="message" name="message" class="form-control form-control-lg" rows="4" required></textarea>
                  <div class="invalid-feedback">${this.i18n('advisory.contactForm.messageField.errorMessage')}</div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary shadow-primary btn-lg">
                <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                <span>${this.i18n('advisory.contactForm.buttonCTA')}</span>
              </button>
              <p class="fs-xs pb-2 pb-lg-0 mt-4 mb-0">${this.i18n('generic.recaptchaDisclaimer')}</p>        
            </form>
            <div id="contact-form-done" class="col-lg-6 col-md-7 offset-xl-1" style="display: none;">
              <h4 class="text-center">${this.i18n('advisory.contactForm.thankYouMessage')}</h4>
            </div>
            
            ${includeFormScript(this.i18n, 'contact-form', 'advisoryForm')}
                        
          </div>

          <!-- Pattern -->
          <div class="position-absolute end-0 bottom-0 text-primary">
            <svg width="416" height="444" viewBox="0 0 416 444" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M240.875 615.746C389.471 695.311 562.783 640.474 631.69 504.818C700.597 369.163 645.201 191.864 496.604 112.299C348.007 32.7335 174.696 87.5709 105.789 223.227C36.8815 358.882 92.278 536.18 240.875 615.746ZM208.043 680.381C388.035 776.757 605.894 713.247 694.644 538.527C783.394 363.807 709.428 144.04 529.436 47.6636C349.443 -48.7125 131.584 14.7978 42.8343 189.518C-45.916 364.238 28.0504 584.005 208.043 680.381Z" fill="currentColor"/><path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd" d="M262.68 572.818C382.909 637.194 526.686 594.13 584.805 479.713C642.924 365.295 595.028 219.601 474.799 155.224C354.57 90.8479 210.793 133.912 152.674 248.33C94.5545 362.747 142.45 508.442 262.68 572.818ZM253.924 590.054C382.526 658.913 538.182 613.536 601.593 488.702C665.004 363.867 612.156 206.847 483.554 137.988C354.953 69.129 199.296 114.506 135.886 239.341C72.4752 364.175 125.323 521.195 253.924 590.054Z" fill="currentColor"/></svg>
          </div>
        </div>
      </section>`
}
