import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { pageTransition, fadeInUp, staggerContainer, EASE_OUT, DURATION, DISTANCE } from "@/lib/motion";
import MotionInView from "@/components/MotionInView";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

// Shared Page Layout
const PageLayout = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    className="pt-32 pb-24 min-h-screen bg-background"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <MotionInView intensity="medium" direction="vertical" className="mb-16 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.MEDIUM, ease: EASE_OUT }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.MEDIUM, ease: EASE_OUT, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </MotionInView>
        {children}
      </div>
    </div>
  </motion.div>
);

export function ProcessPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = [
    { title: "Application", desc: "オンラインフォームより、事業計画書とピッチデックをご提出ください。" },
    { title: "Screening", desc: "専門チームによる書類審査と、初回面談を実施します。" },
    { title: "Due Diligence", desc: "ビジネスモデル、財務、法務などの詳細な調査を行います。" },
    { title: "Matching", desc: "最適な投資家を選定し、面談をセッティングします。" },
    { title: "Investment", desc: "条件交渉を経て、投資契約を締結します。" },
    { title: "Growth Support", desc: "投資実行後も、定例ミーティングやメンタリングを通じて成長を支援します。" },
  ];

  return (
    <PageLayout title="Matching Process" subtitle="透明性の高いプロセスで、最適なパートナーシップを実現します。">
      <div className="relative border-l-2 border-border ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_OUT }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute -left-[41px] md:-left-[59px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                <span className="text-accent mr-4">0{index + 1}</span>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}

export function AboutPage() {
  return (
    <PageLayout title="About Us" subtitle="信頼と革新の架け橋として。">
      <div className="space-y-16">
        <MotionInView intensity="medium" direction="vertical">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Force Legacyは、次世代を担うスタートアップと、先見性のある投資家をつなぐプラットフォームです。
              私たちは単なるマッチングサービスではありません。
              双方のビジョンを深く理解し、長期的な信頼関係に基づいた「共創」を生み出すことを使命としています。
            </p>
            <p>
              金融業界での長年の経験と、スタートアップエコシステムへの深い知見を活かし、
              確実性と革新性を両立させた新しい価値創造の形を提案します。
            </p>
          </div>
        </MotionInView>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <MotionInView intensity="medium" delay={0.2}>
            <motion.div 
              className="bg-card p-8 border border-border"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xl font-heading font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                挑戦する人々に、確かな未来への道筋を提供する。
              </p>
            </motion.div>
          </MotionInView>
          <MotionInView intensity="medium" delay={0.3}>
            <motion.div 
              className="bg-card p-8 border border-border"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xl font-heading font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                信頼と誠実さが報われる、持続可能なイノベーション社会の実現。
              </p>
            </motion.div>
          </MotionInView>
        </motion.div>

        <MotionInView intensity="medium" direction="vertical">
          <h3 className="text-2xl font-heading font-bold mb-6">Company Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 border-t border-border pt-8">
            {[
              { label: "Company Name", value: "Force Legacy Inc." },
              { label: "Established", value: "April 1, 2024" },
              { label: "Headquarters", value: "東京都中央区日本橋箱崎町1-11" },
              { label: "CEO", value: "Chiaki Katagiri" },
              { label: "Business", value: "Startup Investment Matching, Business Consulting" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-bold text-primary">{item.label}</div>
                <div className="text-muted-foreground">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </MotionInView>

        <MotionInView intensity="medium" direction="vertical">
          <h3 className="text-2xl font-heading font-bold mb-6">Location & Access</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.82354!2d139.77820!3d35.66777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0e0e0e0e0d%3A0x0!2z5pil5pil6YeO5bGx5piO5Y2X5Lil5pil5piO!5e0!3m2!1sja!2sjp!4v1640000000000"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 border border-border rounded-lg"
            >
              <h4 className="font-bold text-primary mb-4">Address</h4>
              <p className="text-muted-foreground">東京都中央区日本橋箱崎町1-11</p>
              <p className="text-sm text-muted-foreground mt-2">Tel: 03-6206-0540</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 border border-border rounded-lg"
            >
              <h4 className="font-bold text-primary mb-4">Business Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 10:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday, Sunday, Holidays: Closed</p>
            </motion.div>
          </div>
        </MotionInView>
      </div>
    </PageLayout>
  );
}

export function FAQPage() {
  const faqs = [
    {
      q: "どのようなステージのスタートアップが対象ですか？",
      a: "主にシード期からシリーズAのスタートアップを対象としていますが、革新的な技術やビジネスモデルを持つ場合は、ステージに関わらず検討させていただきます。",
    },
    {
      q: "投資家の参加条件はありますか？",
      a: "はい、適格機関投資家または一定の資産要件を満たす個人投資家に限定させていただいております。詳細な審査基準についてはお問い合わせください。",
    },
    {
      q: "マッチングまでの期間はどのくらいですか？",
      a: "平均して1〜2ヶ月程度です。ただし、デューデリジェンスの状況により前後する場合があります。",
    },
    {
      q: "手数料はかかりますか？",
      a: "スタートアップ側は原則無料です。投資家側には、成約時に所定の手数料をいただいております。",
    },
  ];

  return (
    <PageLayout title="FAQ" subtitle="よくあるご質問">
      <MotionInView intensity="medium" direction="vertical">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </MotionInView>
    </PageLayout>
  );
}

export function ContactPage() {
  const [formData, setFormData] = React.useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // フォーム送信ロジック（実装時はバックエンド連携）
      console.log("Form submitted:", formData);
      alert("お問い合わせありがとうございます。確認後、ご連絡させていただきます。");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout title="Contact" subtitle="お問い合わせ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <MotionInView intensity="medium" direction="horizontal">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              サービスに関するご質問やご相談は、以下のフォームよりお気軽にお問い合わせください。
              通常、3営業日以内に担当者よりご連絡いたします。
            </p>
            
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Mail, text: "info@forcelegacy.com" },
                { icon: Phone, text: "03-6206-0540" },
                { icon: MapPin, text: "東京都中央区日本橋箱崎町1-11" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-primary group cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </MotionInView>

        <MotionInView intensity="medium" direction="horizontal" delay={0.2}>
          <motion.form 
            className="space-y-6 bg-card p-8 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.MEDIUM }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Name</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input 
                  placeholder="Your Name" 
                  className="bg-background" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </motion.div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Email</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-background" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </motion.div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Subject</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input 
                  placeholder="Inquiry about..." 
                  className="bg-background" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </motion.div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Message</label>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Textarea 
                  placeholder="Your message here..." 
                  className="bg-background min-h-[150px]" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-bold tracking-wide disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </motion.form>
        </MotionInView>
      </div>
    </PageLayout>
  );
}
