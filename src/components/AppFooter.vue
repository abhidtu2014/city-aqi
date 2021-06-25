<template>
  <footer class="site-footer">
    <el-row>
      <el-col :span="12">
        <h6>About</h6>
        <p class="text-justify">
          This Web App displays real time AQI updates from <br />
          Web socket of various cities around India.
        </p>
      </el-col>
      <el-col :span="6">
        <h6>Tech Stack</h6>
        <ul class="footer-links">
          <li><a target="_blank" href="https://vuejs.org/">Vue.js</a></li>
          <li>
            <a target="_blank" href="https://element.eleme.io/#/en-US"
              >ElementUI</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.highcharts.com/">Highcharts</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
              >Web Sockets</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
              >Web Worker</a
            >
          </li>
          <li>
            <a target="_blank" href="https://aws.amazon.com/">AWS S3</a>
          </li>
          <li>
            <a target="_blank" href="https://aws.amazon.com/">AWS Cloudfront</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="6">
        <h6>Quick Links</h6>
        <ul class="footer-links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Contact Me</a></li>
          <li>
            <a href="#">Contribute</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" :offset="3">
        <p class="copyright-text">
          Copyright &copy; 2021 All Rights Reserved by
          <a
            target="_blank"
            aria-label="Reach out to me on Linkedin"
            href="https://www.linkedin.com/in/abhishek-rajput-codeslayer/"
            >Abhishek Rajput</a
          >.
        </p>
      </el-col>
      <el-col :span="6" :offset="7">
        <ul class="social-icons">
          <li>
            <a
              title="Linkedin"
              target="_blank"
              aria-label="Reach out to me on Linkedin"
              href="https://www.linkedin.com/in/abhishek-rajput-codeslayer/"
            >
              <img alt="linkedin icon" class="social-icon-img" src="/img/icons/linkedin.svg" />
            </a>
          </li>
          <li>
            <a
              title="Github"
              target="_blank"
              aria-label="Checkout my projects on github"
              href="https://github.com/abhidtu2014/"
            >
              <img alt="github icon" class="social-icon-img" src="/img/icons/github.svg" />
            </a>
          </li>
          <li>
            <a
              title="Leetcode"
              target="_blank"
              aria-label="Checkout my profile on Leetcode"
              href="https://leetcode.com/abhi_dtu2014/"
            >
              <img alt="leetcode icon" class="social-icon-img" src="/img/icons/leetcode.svg" />
            </a>
          </li>
          <li>
            <a
              title="Instagram"
              target="_blank"
              aria-label="Follow me on instagram"
              href="https://www.instagram.com/abhishek.rajput14/"
            >
              <img alt="instagram" class="social-icon-img" src="/img/icons/instagram.svg" />
            </a>
          </li>
        </ul>
      </el-col>
    </el-row>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-footer {
  background-color: rgb(38, 39, 43);
  padding: 45px 20px 20px 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  .text-justify {
    text-align: center;
  }
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: rgb(38, 39, 43);
}
.copyright-text {
  margin: 0;
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 50px;
  height: 50px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icon-img {
  width: 48px;
  height: 48px;
}
/* .social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
} */
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
</style>
