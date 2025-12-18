import { motion } from "framer-motion";
import { pageTransition, fadeInUp, staggerContainer } from "@/lib/motion";
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </MotionInView>
        {children}
      </div>
    </div>
  </motion.div>
);

export function ProcessPage() {
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
          <MotionInView key={index} intensity="medium" delay={index * 0.1} direction="horizontal">
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[59px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                <span className="text-accent mr-4">0{index + 1}</span>
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </MotionInView>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionInView intensity="medium" delay={0.2}>
            <div className="bg-card p-8 border border-border">
              <h3 className="text-xl font-heading font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                挑戦する人々に、確かな未来への道筋を提供する。
              </p>
            </div>
          </MotionInView>
          <MotionInView intensity="medium" delay={0.3}>
            <div className="bg-card p-8 border border-border">
              <h3 className="text-xl font-heading font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                信頼と誠実さが報われる、持続可能なイノベーション社会の実現。
              </p>
            </div>
          </MotionInView>
        </div>

        <MotionInView intensity="medium" direction="vertical">
          <h3 className="text-2xl font-heading font-bold mb-6">Company Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 border-t border-border pt-8">
            <div className="font-bold text-primary">Company Name</div>
            <div className="text-muted-foreground">Force Legacy Inc.</div>
            
            <div className="font-bold text-primary">Established</div>
            <div className="text-muted-foreground">April 1, 2024</div>
            
            <div className="font-bold text-primary">Headquarters</div>
            <div className="text-muted-foreground">1-1-1 Otemachi, Chiyoda-ku, Tokyo</div>
            
            <div className="font-bold text-primary">CEO</div>
            <div className="text-muted-foreground">Taro Yamada</div>
            
            <div className="font-bold text-primary">Business</div>
            <div className="text-muted-foreground">Startup Investment Matching, Business Consulting</div>
          </div>
        </MotionInView>
      </div>
    </PageLayout>
  );
}

export function FAQPage() {
  return (
    <PageLayout title="FAQ" subtitle="よくあるご質問">
      <MotionInView intensity="medium" direction="vertical">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-heading font-semibold">どのようなステージのスタートアップが対象ですか？</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              主にシード期からシリーズAのスタートアップを対象としていますが、
              革新的な技術やビジネスモデルを持つ場合は、ステージに関わらず検討させていただきます。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-heading font-semibold">投資家の参加条件はありますか？</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              はい、適格機関投資家または一定の資産要件を満たす個人投資家に限定させていただいております。
              詳細な審査基準についてはお問い合わせください。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-heading font-semibold">マッチングまでの期間はどのくらいですか？</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              平均して1〜2ヶ月程度です。ただし、デューデリジェンスの状況により前後する場合があります。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-heading font-semibold">手数料はかかりますか？</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              スタートアップ側は原則無料です。投資家側には、成約時に所定の手数料をいただいております。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </MotionInView>
    </PageLayout>
  );
}

export function ContactPage() {
  return (
    <PageLayout title="Contact" subtitle="お問い合わせ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <MotionInView intensity="medium" direction="horizontal">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              サービスに関するご質問やご相談は、以下のフォームよりお気軽にお問い合わせください。
              通常、3営業日以内に担当者よりご連絡いたします。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <Mail className="w-5 h-5" />
                <span>info@forcelegacy.com</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <Phone className="w-5 h-5" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <MapPin className="w-5 h-5" />
                <span>Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </MotionInView>

        <MotionInView intensity="medium" direction="horizontal" delay={0.2}>
          <form className="space-y-6 bg-card p-8 border border-border">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Name</label>
              <Input placeholder="Your Name" className="bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Email</label>
              <Input type="email" placeholder="your@email.com" className="bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Subject</label>
              <Input placeholder="Inquiry about..." className="bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary">Message</label>
              <Textarea placeholder="Your message here..." className="bg-background min-h-[150px]" />
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-bold tracking-wide">
              Send Message
            </Button>
          </form>
        </MotionInView>
      </div>
    </PageLayout>
  );
}
