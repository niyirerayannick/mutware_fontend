<template>
  <div>
    <Header />
     <div class="container mt-4">
      <div class="row">
        <div class="col-md-2">
          <img :src="require('@/assets/img/mutwarekid.png')" class="mutware-edu-logo">
        </div>
        <div class="col-md-7">
          <h4 class="mb-4"><b>Mutware Educate Children Protection Policy</b></h4>
        </div>
        <div class="col-md-3">
          <img :src="require('@/assets/img/mutware_banner.png')" class="mutware-logo">
        </div>
      </div>
      <br>
      <h4 class="mb-4">Mutware Educate Terms and Conditions</h4>

      <div class="mb-4">
        <h5>1. Introduction</h5>
        <p>These Terms and Conditions govern the use of Mutware Educate's online education platform, which provides educational tools, games, and content for children and skills for young people. By using our platform, you agree to comply with these terms and conditions.</p>
      </div>

      <div class="mb-4">
        <h5>2. Eligibility and Responsibility</h5>
        <p>By using our platform, you represent that you are a responsible parent or guardian seeking online education for children and young people. You are responsible for overseeing and ensuring your child's safe and responsible use of our platform. Note: children and young people are referred to as anyone under 18 years old.</p>
      </div>
      <div class="mb-4">
        <h5>3. Collaborative Approach</h5>
        <p>We aim to work collaboratively with parents and guardians by providing tools and resources to help you
          support your child's online activities. It is essential for parents and guardians to actively participate in
          their child's digital education journey. Please provide us with truthful information so that in any case, if
          you face any challenge while using our services or tools, you can be supported accordingly.</p>
      </div>
      <div class="mb-4">
        <h5>4. Children and Young People's Responsibilities</h5>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Behave respectfully and responsibly while using our educational tools, games, and content.</li>
          <li><span class="bullet">➢</span> Report any instances of abuse, harassment, or inappropriate behavior to trusted adults, including parents, guardians, or designated contacts.</li>
        </ul>
      </div>
      <div class="mb-4">
        <h5>5. Online Safety and Privacy</h5>
        <p>We take online safety and privacy seriously. We employ various measures to protect the online
          experience of children and young people, including age-appropriate content, real-time moderation, and
          parental/guardian involvement features. Please refer to our Child Protection Policy for more information.</p>
      </div>
      <div class="mb-4">
        <h5>6. Platform Usage Guidelines</h5>
        <p>When using our platform, you agree to:</p>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Abide by all applicable laws and regulations.</li>
          <li><span class="bullet">➢</span> Refrain from engaging in any harmful, abusive, or inappropriate behavior.</li>
          <li><span class="bullet">➢</span> Use the platform solely for educational and recreational purposes as intended..</li>
          <li><span class="bullet">➢</span> Provide truthful information</li>
        </ul>
      </div>
      <div class="mb-4">
        <h5>7. Reporting Concerns</h5>
        <p>If you encounter any concerns, incidents, or issues while using our platform, please report them promptly to our support team. We take all reports seriously and will take appropriate action..</p>
      </div>
      <div class="mb-4">
        <h5>8. Termination of Use</h5>
        <p>Mutware Educate reserves the right to terminate or restrict your access to the platform if you or your child violates these Terms and Conditions. We may do so without notice.</p>
      </div>
      <div class="mb-4">
        <h5>9. Amendments to Terms and Conditions</h5>
        <p>We may update and amend these Terms and Conditions as needed to reflect changes in our services and policies. It is your responsibility to review these terms periodically.</p>
      </div>
      <div class="mb-4">
        <h5>10. Contact Information</h5>
        <p>If you have any questions or concerns about these Terms and Conditions, please contact us at Mutware Educate.</p>
      </div>
      <div class="mb-4">
        <h5>11. Conclusion</h5>
        <p>By using Mutware Educate's online education platform and tools, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions. We are committed to providing a safe and
          secure online education environment for children and young people and are dedicated to working
          collaboratively with parents and guardians to achieve this goal.</p>
      </div>

  </div>
  <div class="bg-green text-white text-center py-3">
    <p>&copy; 2023 Mutware Kid. All rights reserved.</p>
  </div>
  </div>
</template>

<script>
import Header from '../components/AppHeader.vue'

export default {
  name: 'TermsCondition.vue',
  components: {
    Header,
  },
  data() {
    return {
    }
  },
}
</script>
<style>
  bullet {
    margin-right: 0.5rem; 
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .mutware-logo{
    width: 70%;
  }
  .mutware-edu-logo{
    height: 10vh;
    width: 35 %;
  }
  .mb-0 {
    margin-left : 30px;
  }
</style>
