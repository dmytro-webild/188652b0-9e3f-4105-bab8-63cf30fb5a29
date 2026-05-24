"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Activity, Award, CheckCircle, Heart, Zap, Bone, HandHeart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Anasayfa",          id: "hero"},
        {
          name: "Hakkımda",          id: "about"},
        {
          name: "Hizmetler",          id: "features"},
        {
          name: "İletişim",          id: "contact"},
      ]}
      brandName="fizyoselvifizyoterapi.com"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "plain"}}
      title="fizyoselvifizyoterapi.com"
      description="Hareket özgürlüğünüzü geri kazanın. Kanıta dayalı fizyoterapi yaklaşımlarıyla ağrılarınızdan kurtulun ve yaşam kalitenizi artırın."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-hispanic-man-working-pain-recovery-clinic-with-man-with-broken-arm-looking-unhappy-angry-showing-rejection-negative-with-thumbs-down-gesture-bad-expression_839833-10705.jpg",          alt: "Hasta 1"},
        {
          src: "http://img.b2bpic.net/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071445.jpg",          alt: "Hasta 2"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-holding-pen_1098-898.jpg",          alt: "Hasta 3"},
        {
          src: "http://img.b2bpic.net/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071439.jpg",          alt: "Hasta 4"},
        {
          src: "http://img.b2bpic.net/free-photo/physiotherapist-helping-elderly-patient-with-hand-exercise-physiotherapy-clinic_662251-1734.jpg",          alt: "Hasta 5"},
      ]}
      avatarText="Binlerce mutlu hastanın tercihi"
      buttons={[
        {
          text: "Randevu Al",          href: "https://wa.me/905342014036"},
      ]}
      marqueeItems={[
        {
          type: "text-icon",          text: "Kişiselleştirilmiş Tedavi",          icon: CheckCircle,
        },
        {
          type: "text-icon",          text: "Modern Teknikler",          icon: Zap,
        },
        {
          type: "text-icon",          text: "Bilimsel Yaklaşım",          icon: Activity,
        },
        {
          type: "text-icon",          text: "Uzman Deneyim",          icon: Award,
        },
        {
          type: "text-icon",          text: "Konforlu İyileşme",          icon: Heart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Bireye Özgü Tedavi Yaklaşımı"
      description="Fizyoterapi sürecinde kişiselleştirilmiş analiz ve modern tekniklerle iyileşme sürecinizi optimize ediyoruz."
      bulletPoints={[
        {
          title: "Manuel Terapi",          description: "Uluslararası standartlarda mobilizasyon teknikleri.", icon: HandHeart},
        {
          title: "Kayropraktik",          description: "Omurga sağlığı için güvenli ve etkili düzeltmeler.", icon: Bone},
        {
          title: "Egzersiz Reçetesi",          description: "Size özel ev programları ve takip sistemi."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-male-doctor-medical-suit-displeased-yellow-wall_179666-23133.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Activity,
          title: "Ortopedik Rehabilitasyon",          description: "Ameliyat sonrası veya yaralanma sonrası toparlanma."},
        {
          icon: Bone,
          title: "Kayropraktik",          description: "Omurga hareketliliği ve fonksiyonel düzeltmeler."},
        {
          icon: HandHeart,
          title: "Manuel Terapi",          description: "Eklem ve yumuşak doku mobilizasyon teknikleri."},
        {
          icon: CheckCircle,
          title: "Sporcu Sağlığı",          description: "Performans artırıcı ve sakatlık önleyici çalışmalar."},
        {
          icon: Heart,
          title: "Kronik Ağrı Yönetimi",          description: "Bel, boyun ve eklem ağrılarına kalıcı çözümler."},
      ]}
      title="Hizmet Alanlarımız"
      description="Kas ve iskelet sistemi sorunlarına yönelik kapsamlı çözümler."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "1500+",          description: "İyileşen Hasta"},
        {
          id: "m2",          value: "5+",          description: "Yıllık Deneyim"},
        {
          id: "m3",          value: "98%",          description: "Hasta Memnuniyeti"},
      ]}
      title="Başarılarımız"
      description="Verilerle fizyoterapi yolculuğumuz."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Ayşe Y.",          role: "Ofis Çalışanı",          testimonial: "Bel ağrılarım için kliniğe geldim, hayat kalitem değişti.",          imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-showing-patient-how-use-medical-machine_23-2148328380.jpg"},
        {
          id: "2",          name: "Mehmet K.",          role: "Sporcu",          testimonial: "Spor yaralanmamdan sonra beni çok hızlı sahaya döndürdü.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-doctor-speaking-with-patient_23-2147896697.jpg"},
        {
          id: "3",          name: "Zeynep S.",          role: "Öğretmen",          testimonial: "Duruş bozukluğu tedavisi ile boyun ağrılarım tamamen geçti.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12673.jpg"},
        {
          id: "4",          name: "Can B.",          role: "Emekli",          testimonial: "Diz ağrılarım yüzünden yürüyemezken şimdi çok rahatım.",          imageSrc: "http://img.b2bpic.net/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071465.jpg"},
        {
          id: "5",          name: "Deniz T.",          role: "Mühendis",          testimonial: "Çok ilgili ve bilgili bir klinik. Teşekkürler.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg"},
      ]}
      title="Hasta Deneyimleri"
      description="Bizimle iyileşme yolculuğuna çıkanlar."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Sağlıklı Yaşam Blogu"
      description="Fizyoterapi ve sağlıklı yaşam üzerine güncel paylaşımlar."
      blogs={[
        {
          id: "b1",          category: "Genel Sağlık",          title: "Doğru Oturma Pozisyonu",          excerpt: "Ofis çalışanları için ergonomi ipuçları...",          imageSrc: "http://img.b2bpic.net/free-photo/mature-woman-standing-with-crossed-arms-red-t-shirt-looking-confident_176474-32890.jpg",          authorName: "fizyoselvifizyoterapi.com",          authorAvatar: "http://img.b2bpic.net/free-photo/doctor-standing-hospital-premises_107420-84762.jpg",          date: "10.05.2024"},
        {
          id: "b2",          category: "Spor",          title: "Sakatlık Önleme",          excerpt: "Spor öncesi ısınmanın önemi nedir?",          imageSrc: "http://img.b2bpic.net/free-photo/woman-rehabilitation-center-getting-treatment_23-2150356697.jpg",          authorName: "fizyoselvifizyoterapi.com",          authorAvatar: "http://img.b2bpic.net/free-photo/african-american-nurse-evaluating-lab-test-results-discussing-recovery-plan_482257-122827.jpg",          date: "15.05.2024"},
        {
          id: "b3",          category: "Manuel Terapi",          title: "Manuel Terapinin Gücü",          excerpt: "Elle yapılan tedavilerin avantajları nelerdir?",          imageSrc: "http://img.b2bpic.net/free-photo/young-sports-people-training-morning-gym_1157-32132.jpg",          authorName: "fizyoselvifizyoterapi.com",          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-male-doctor-watching-something-yellow-wall_179666-13013.jpg",          date: "20.05.2024"},
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Seans süresi ne kadardır?",          content: "Seanslarımız genellikle 45-60 dakika sürmektedir."},
        {
          id: "q2",          title: "Doktor sevkine gerek var mı?",          content: "Detaylı bir değerlendirme için doğrudan başvurabilirsiniz."},
        {
          id: "q3",          title: "Kaç seans gerekir?",          content: "Tedavi süreci vaka bazlı değerlendirilir."},
      ]}
      title="Sıkça Sorulan Sorular"
      description="Fizyoterapi sürecine dair merak edilenler."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      text="Sağlıklı bir gelecek için ilk adımı atın. Randevu planlamak için iletişime geçin. fizyoselvifizyoterapi.com - Tel: 05342014036 - Adres: Kars Merkez, Şehitler Mahallesi, Şehitlik Caddesi 9c/2"
      buttons={[
        {
          text: "WhatsApp'tan Randevu Al",          href: "https://wa.me/905342014036"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="fizyoselvifizyoterapi.com"
      columns={[
        {
          title: "Sayfalar",          items: [
            {
              label: "Hakkımda",              href: "#about"},
            {
              label: "Hizmetler",              href: "#features"},
          ],
        },
        {
          title: "İletişim",          items: [
            {
              label: "Randevu (05342014036)",              href: "https://wa.me/905342014036"},
            {
              label: "Web Sitesi",              href: "https://fizyoselvifizyoterapi.com"},
          ],
        },
      ]}
      copyrightText="© 2024 fizyoselvifizyoterapi.com"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}