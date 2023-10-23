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
      <br><h4 class="mb-4">Mutware Educate Children Protection Policy</h4>

      <div class="mb-4">
        <h5>1. Introduction</h5>
        <p>Mutware Educate is committed to creating a safe and secure environment for children and young people
        using our educational tools, engaging content, and digital technologies. This Children Protection Policy
        outlines our commitment to ensuring the well-being and safety of children, irrespective of their gender,
        sexuality, ethnic background, faith, culture, family income, disability, or any other defining feature while
        participating in our programs and services. <b>Note</b>: children and young people are referred to as anyone
        under 18 years old.
        </p>
      </div>

      <div class="mb-4">
        <h5>2. Policy Objectives</h5>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Ensure the physical and emotional well-being of children and young people engaged in our educational programs and activities.</li>
          <li><span class="bullet">➢</span> Prevent any form of abuse or harm, whether online or offline, that may occur during their interaction with our services.</li>
          <li><span class="bullet">➢</span> Foster an inclusive and respectful environment that values diversity and provides equal opportunities for all children and young people.</li>
        </ul>
      </div>
      <div class="mb-4">
        <h5>3. Code of Conduct</h5>
        <h5>3.1. Staff and Volunteers</h5>
        <p>All staff, volunteers, and affiliates involved with [Your Organization Name] are required to adhere to a strict code of conduct. This includes:</p>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Treating all children and young people with respect, kindness, and fairness.</li>
          <li><span class="bullet">➢</span> Maintaining professional boundaries when interacting with children and young people..</li>
          <li><span class="bullet">➢</span> Ensuring a safe and secure online environment, free from inappropriate content or activities.</li>
          <li><span class="bullet">➢</span> Reporting any concerns or incidents of abuse or harm promptly to designated childprotection officers.</li>
        </ul>
        <h5>3.2. Children and Young People</h5>
        <p>We expect children and young people to:</p>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Behave respectfully and responsibly while using our educational tools, games, and content.</li>
          <li><span class="bullet">➢</span> Report any instances of abuse, harassment, or inappropriate behavior to trusted adults.</li>
        </ul>
      </div>
      <div class="mb-4">
        <h5>4. Online Safety Measures</h5>
        <p>Mutware Educate employs the following online safety measures to protect children and young people:</p>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Age-appropriate content: We ensure that all content and activities are age-appropriate.</li>
          <li><span class="bullet">➢</span> Moderation: We use real-time moderation and filtering tools to prevent inappropriate interactions and content.</li>
          <li><span class="bullet">➢</span> Parental/guardian involvement: We aim to work collaboratively with parents/guardians with tools and resources to help them support their child's online activities.</li>
          <li><span class="bullet">➢</span> Education: We educate children, young people, and parents about online safety, privacy, and responsible digital citizenship.</li>
        </ul>
      </div>
      <div class="mb-4">
        <h5>5. Reporting and Response</h5>
        <p>We take all reports of abuse, harm, or misconduct seriously. Our response includes:</p>
        <ul class="mb-0">
          <li><span class="bullet">➢</span> Thoroughly investigating the report and taking appropriate action.</li>
          <li><span class="bullet">➢</span> Cooperation with relevant authorities, where necessary, to address and resolve issues.</li>
          <li><span class="bullet">➢</span> Offering support and assistance to the affected child and their family.</li>
        </ul>
      </div>

      <div class="mb-4">
        <h5>6. Training and Awareness</h5>
        <p>By using our platform, you represent that you are a responsible parent or guardian seeking online education for children and young people. You are responsible for overseeing and ensuring your child's safe and responsible use of our platform. Note: children and young people are referred to as anyone under 18 years old.</p>
      </div>
      <div class="mb-4">
        <h5>7. Monitoring and Review</h5>
        <p>We continuously monitor and review our Children Protection Policy to ensure its effectiveness and
          relevance. Regular assessments and improvements are made to maintain the highest standards of child
          protection.
        </p>
      </div>
      <div class="mb-4">
        <h5>8. Conclusion</h5>
        <p>Mutware Educate is dedicated to the welfare, safety, and education of children and young people. By
        adhering to this Children Protection Policy, we ensure that children can access quality education in a safe
        and nurturing environment, fostering their growth and development.<br><br>
        Mutware Educate Child Protection Policy is a living document, and we are committed to upholding its
        principles and values.
        </p>
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
