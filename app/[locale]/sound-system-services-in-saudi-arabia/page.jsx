"use client";
import CtaBox from "@/components/CtaBox";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SeoHead";
import ServiceBenefit from "@/components/ServiceBenefit";
import ServiceSingle from "@/components/ServiceSingle";
import VendorSlider from "@/components/Vendor";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const metadata = {
  title: {
    default: "Sound System Services in Saudi Arabia | Gulf Horizon Telecom Est",
  },
  description:
    "Premium sound system services in Saudi Arabia by Gulf Horizon Telecom Est. From home theatres to car audio systems, we offer top brands like Sony, Bose, and JBL. Professional installation and affordable Pricing are guaranteed.",
};

const page = ({ params }) => {
  const t = useTranslations("sound_system");
  const pageHeader = {
    title: t("pageheader.title"),
    backto: t("pageheader.home"),
    breadcrumbs: [
      {
        name: t("pageheader.about"),
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/soundbanner.png",
  };
  const Sidebarcategories = {
    heading: t("Sidebarcategories.heading"),
    details: [
      {
        name: t("Sidebarcategories.details.cctv"),
        link: "/cctv-systems-services",
      },
      {
        name: t("Sidebarcategories.details.access_control"),
        link: "/access-control-systems-in-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.cyber_security"),
        link: "/cyber-security-services-in-saudi-arabia",
      },
      {
        name: t("Sidebarcategories.details.fire_fighting"),
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
    ],
  };

  const mainPageContent = {
    images: ["/sound1.png", "/sound2.png", "/sound3.png"],
    heading: `${t("heading")}`,
    description: `${t("description")}`,

    products: {
      productTitle: `${t("Products.productTitle")}`,
      details: [
        {
          name: `${t("Products.product_1.title")}`,
          description: `${t("Products.product_1.description")}`,
        },
        {
          name: `${t("Products.product_2.title")}`,
          description: `${t("Products.product_2.description")}`,
        },
        {
          name: `${t("Products.product_3.title")}`,
          description: `${t("Products.product_3.description")}`,
        },
        {
          name: `${t("Products.product_4.title")}`,
          description: `${t("Products.product_4.description")}`,
        },
        {
          name: `${t("Products.product_5.title")}`,
          description: `${t("Products.product_5.description")}`,
        },
      ],
    },
  };

  const benefitItems = {
    heading: `${t("benefitItems.title")}`,
    description: `${t("benefitItems.description")}`,
    details: [
      {
        icon: "/icon-service-benefit-1.svg",
        heading: `${t("benefitItems.details.benefit_1.title")}`,
        description: `${t("benefitItems.details.benefit_1.description")}`,
      },
      {
        icon: "/icon-service-benefit-2.svg",
        heading: `${t("benefitItems.details.benefit_1.title")}`,
        description: `${t("benefitItems.details.benefit_1.description")}`,
      },
      {
        icon: "/icon-service-benefit-3.svg",
        heading: "Customized Energy-Efficient Systems",
        heading: `${t("benefitItems.details.benefit_1.title")}`,
        description: `${t("benefitItems.details.benefit_1.description")}`,
      },
    ],
  };

  const whychooseus = [
    {
      heading: `${t("whychoose.why_1_title")}`,
      description: `${t("whychoose.why_1_description")}`,
    },
    {
      heading: `${t("whychoose.why_2_title")}`,
      description: `${t("whychoose.why_2_description")}`,
    },
    {
      heading: `${t("whychoose.why_3_title")}`,
      description: `${t("whychoose.why_3_description")}`,
    },
  ];

  const [resolvedParams, setResolvedParams] = useState(null);
  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params; // Unwrap the Promise
      setResolvedParams(resolved);
    };

    fetchParams();
  }, [params]);
  if (!resolvedParams) return null; // You might want to handle loading states

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={resolvedParams.locale} // Use the resolved locale
        pageUrl="/sound-system-services-in-saudi-arabia" // Use the resolved locale
      />
      <TransitionEffect />
      <PageHeader pageHeader={pageHeader} />
      <ServiceSingle
        mainPageContent={mainPageContent}
        Sidebarcategories={Sidebarcategories}
      />
      <ServiceBenefit items={benefitItems} />
      <WhyChooseUs whychooseus={whychooseus} />
      <CtaBox />
      <VendorSlider />
    </>
  );
};

export default page;
