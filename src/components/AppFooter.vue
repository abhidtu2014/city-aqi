<template>
  <footer class="site-footer">
      <el-row>
        <el-col :span="12">
          <h6>About</h6>
          <p class="text-justify">
            This Web App displays real time AQI updates from <br /> Web socket of
            various cities around India.
          </p>
        </el-col>
        <el-col :span="6">
          <h6>Categories</h6>
          <ul class="footer-links">
            <li><a href="#">Node</a></li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">C++</a>
            </li>
            <li>
              <a href="#">Vue.js</a>
            </li>
            <li>
              <a href="#">Kafka</a>
            </li>
            <li>
              <a href="#">Pubnub</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>
              <a href="#">Contribute</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6" :offset="3">
          <p class="copyright-text">
            Copyright &copy; 2021 All Rights Reserved by
            <a href="#">Abhishek Rajput</a>.
          </p>
        </el-col>
        <el-col :span="6" :offset="7">
          <ul class="social-icons">
            <li>
              <img src="https://img.icons8.com/color/48/000000/facebook.png" />
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/twitter-circled--v3.png"
              />
            </li>
            <li>
              <img
                src="https://img.icons8.com/color/48/000000/google-maps.png"
              />
            </li>
            <li>
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
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
  background-color: #33353d;
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
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
</style>
