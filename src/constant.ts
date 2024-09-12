type FooterLink = {
  name: string;
  url: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};
export const footerLinks: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "IT Support", url: "/it-support" },
      { name: "Web Design", url: "/web-design" },
      { name: "Development", url: "/development" },
      { name: "Cloud Things", url: "/cloud-things" },
      { name: "E-Commerce", url: "/ecommerce" },
      { name: "CRM Solutions", url: "/crm-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "About Us", url: "/about" },
      { name: "Partners", url: "/partners" },
      { name: "Careers", url: "/careers" },
      { name: "Events", url: "/events" },
      { name: "Team", url: "/team" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Case Studies", url: "/case-studies" },
      { name: "Our Pricing", url: "/pricing" },
      { name: "Features", url: "/features" },
      { name: "Overview", url: "/overview" },
      { name: "New Releases", url: "/new-releases" },
      { name: "Solutions", url: "/solutions" },
    ],
  },
  {
    title: "Our Fields",
    links: [
      { name: "Healthcare", url: "/healthcare" },
      { name: "Banks", url: "/banks" },
      { name: "Logistics", url: "/logistics" },
      { name: "Supermarkets", url: "/supermarkets" },
      { name: "Industries", url: "/industries" },
      { name: "Hotels", url: "/hotels" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Licenses", url: "/licenses" },
      { name: "Settings", url: "/settings" },
      { name: "Cookies", url: "/cookies" },
      { name: "Document", url: "/document" },
      { name: "Terms", url: "/terms" },
      { name: "Privacy", url: "/privacy" },
    ],
  },
];

export const faqContent = [
  {
    question: "How do I get started with building a WordPress website?",
    answer:
      "Contact us to discuss your website needs, and we'll guide you through our streamlined process to design and develop a WordPress site that meets your goals.",
  },
  {
    question:
      "Is WordPress suitable for both small businesses and large enterprises?",
    answer:
      "Absolutely! WordPress is highly flexible and scalable, making it ideal for businesses of all sizes, from small startups to large enterprises.",
  },
  {
    question: "What kind of WordPress services do you offer?",
    answer:
      "We offer a full range of WordPress services including custom theme development, plugin integration, SEO optimization, and ongoing maintenance and support.",
  },
  {
    question: "Can I customize my WordPress website to fit my brand?",
    answer:
      "Yes, we provide fully customizable solutions, ensuring that your WordPress website perfectly reflects your brand's identity and meets your specific business needs.",
  },
  {
    question: "How do you ensure the security of my WordPress website?",
    answer:
      "We implement industry-leading security measures, including regular updates, security monitoring, and backups, to protect your WordPress website from threats.",
  },
];