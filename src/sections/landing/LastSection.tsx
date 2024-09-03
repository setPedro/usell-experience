import Button from "@/components/Button";
import { cn } from "@/utils/cn";
import { Tiro_Telugu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const TiroTelugu = Tiro_Telugu({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LastSection() {
  return (
    <div className="w-full flex justify-center lg:gap-[72px] px-6 py-8 sm:p-12 lg:p-[72px] bg-background text-white">
      <div className="flex flex-col gap-9 max-w-[1200px]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="min-w-[300px] lg:min-w-[552px]">
            <Image
              src="/lightbulb.png"
              alt="landing img"
              width={1024}
              height={1024}
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className={cn("text-[40px]", TiroTelugu.className)}>
                Join a growing community
              </p>
              <p>
                Your website is often the first impression potential customers
                have of your business. Make it count with uSell Experience. Our
                AI-driven tool is here to guide every step of the way, offering
                personalized feedback that takes your site from good to great.
                Don&lsquo;t settle for average results - strive for excellence
                with uSell Experience.
              </p>
              <p>
                By becoming a beta tester, you&lsquo;re not just using a tool -
                you&lsquo;re joining a community of forward-thinking business
                owners and designers. You&lsquo;ll get exclusive access to our
                cutting-edge techology, with no costs or commitments. Start
                transforming your website&lsquo;s performance today - just enter
                your URL and let uSell Experience do the rest, and the chance to
                shape the future of uSell Experience.
              </p>
              <p>
                Ready to see what uSell Experience can do for your website? Sign
                up today and become a beta tester for free. Get the chance to
                hape the future of our software, while unlocking your
                website&lsquo;s true potential, sign up now!
              </p>
            </div>
            <div className="flex gap-6">
              <Link href={"/account/login"}>
                <Button bg={"white"}>Log in</Button>
              </Link>
              <Link href={"/account/signup"}>
                <Button bg={"gradient"}>Get started</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className={cn("text-[40px]", TiroTelugu.className)}>
                Who do we help?
              </p>
              <p>
                <strong>
                  1. Small to medium-sized businesses<br></br>
                </strong>
                If your website isn&lsquo;t converting visitors into customers
                as effectively as it should, uSell Experience is the solution
                you&lsquo;ve been looking for. We help businesses of all sizes
                optimize their websites to attract and retain more customers,
                ensuring that your online presence drives revenue growth.
              </p>
              <p>
                <strong>
                  2. Web designers and agencies<br></br>
                </strong>
                For web design professionals, time is money. uSell Experience
                helps you streamline the optimization process, allowing you to
                deliver better results to your clients faster. Whether
                you&lsquo;re conducting. Whether your conducting A/B tests or
                fine-tuning a client&lsquo;s website, our tool provides the
                insights you need to make informed decisions quickly.
              </p>
              <p>
                <strong>
                  3. Marketing professionals<br></br>
                </strong>
                As a marketer, your goal is to maximize ROI for every campaign.
                uSell Experience helps you enhance the landing pages and overall
                website experience to ensure that your marketing efforts are not
                wasted. With our AI-driven suggestions, you can improve key
                metrics like bounce rate, time on site, and conversion rate.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href={"/#contact"}>
                <Button bg={"gradient"}>Contact us</Button>
              </Link>
            </div>
          </div>

          <div className="min-w-[300px] lg:min-w-[552px]">
            <Image
              src="/earth.png"
              alt="landing img"
              width={1024}
              height={1024}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="min-w-[300px] lg:min-w-[552px]">
            <Image
              src="/highFive.png"
              alt="landing img"
              width={1024}
              height={1024}
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className={cn("text-[40px]", TiroTelugu.className)}>
                Why uSell Experience?
              </p>
              <p>
                <strong>
                  Proven results with AI precision<br></br>
                </strong>
                Traditional A/B testing and UX research can be
                resource-intensive and slow. uSell Experience leverages
                cutting-edge AI technology to provide immediate feedback
                that&lsquo;s rooted in data and proven UX principles. Our tool
                ensures that every suggestion is not only practical but also
                designed to yield tangible results, such as increased engagement
                and higher conversion rates.
              </p>
              <p>
                <strong>
                  Tailored to your needs<br></br>
                </strong>
                Whether you&lsquo;re running a small business website website or
                managing multiple clients as a web designer, uSell Experience
                adapts to your unique requirements. It&lsquo;s designed to be
                flexible and scalable, offering insights that are relevant
                regardless of your website&lsquo;s size, industry or traffic
                levels.
              </p>
              <p>
                <strong>
                  No technical expertise required<br></br>
                </strong>
                You don&lsquo;t need to be a developer to improve your website.
                uSell Experience is built with non-technical users in mind,
                providing a straightforward interface that anyone can navigate.
                Our detailed reports are easy to understand, and the actionable
                we offer can be implemented by anyone, from novices to
                experienced web designers.
              </p>
              <p>
                <strong>
                  Comprehensive analysis<br></br>
                </strong>
                Unlike other tools that only focus on one aspect of your website
                (such as SEO or design), uSell Experience provides a holistic
                analysis. We consider all elements - deign, usability, content,
                and conversion opportunities - to give you a complete picture of
                your website&lsquo;s performance. This means you can address
                issues that you might not have even realized were impacing your
                site&lsquo;s success.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href={"/account/login"}>
                <Button bg={"white"}>Log in</Button>
              </Link>
              <Link href={"/account/signup"}>
                <Button bg={"gradient"}>Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
