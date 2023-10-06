"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { links, teamadvisor } from "@/constants";
import { FadeIn, ListAnimate } from "@/components/framer/variants";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  return (
    <main className="flex flex-col items-center">
      <div className="flex lg:flex-row gap-3 flex-col content-container">
        <div className="flex-1 flex-col lg:pr-44">
          {/* <p className='text-heading1-bold text-dark1'>
            Payment Rails for Emerging Markets
          </p> */}
          <motion.p
            variants={FadeIn("down", 0.2)}
            // variants=FadeAnimate("down", 0.2)
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-heading1-bold text-dark1"
          >
            Payment Rails for Emerging Markets
          </motion.p>

          <motion.p
            variants={FadeIn("down", 0.2)}
            // variants=FadeAnimate("down", 0.2)
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-content-text text-dark-2 mt-4 text-justify'"
          >
            Payment Gateway, Digital Banking, Exchange, and Compliance for
            Businesses and their Consumers.
          </motion.p>

          <motion.div
            variants={FadeIn("down", 0.7)}
            // variants=FadeAnimate("down", 0.2)
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <div className="my-8">
              <button className="btn1">
                <p className="text-btn-text-2">Get Started</p>
              </button>
            </div>

            <div>
              <div className="flex items-center">
                <div className="h-11 w-11 mr-2">
                  <Image
                    src="/assets/phflag.png"
                    alt="Dashboard"
                    objectFit="contain"
                    priority
                    className="object-contain h-full w-full"
                    width={45}
                    height={45}
                  />
                </div>

                <p className="text-text-1 text-dark2">
                  EMI, VASP and Custodian Licenses
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex align-center justify-center h-11 w-11 mr-2">
                  <Image
                    src="/assets/shield.png"
                    alt="Dashboard"
                    objectFit="contain"
                    priority
                    className="object-contain"
                    width={32}
                    height={32}
                  />
                </div>

                <p className="text-text-1 text-dark2">
                  KYC/AML/CTF, KYT, Travel Rule, and Sanctions Compliant
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={FadeIn("up", 0.6)}
          // variants=FadeAnimate("down", 0.2)
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex-1 relative"
        >
          <div className="h-auto w-full items-center justify-center">
            <Image
              src="/assets/dashboard.png"
              alt="Dashboard"
              objectFit="contain"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-contain h-full w-full"
              width={553.66}
              height={352}
            />
          </div>

          <div className="flex h-auto w-full aspect-[1.5/1] justify-end -mt-[45%] overflow-hidden">
            <Image
              src="/assets/mobiledashboard.png"
              alt="mobiledashboard"
              objectFit="contain"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-contain h-full w-auto -mx-8"
              width={443}
              height={436}
            />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col mt-10 lg:mt-40 w-full items-center">
        <motion.div
          variants={FadeIn("up", 0.6)}
          // variants=FadeAnimate("down", 0.2)
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="w-4/12 h-auto lg:hidden block"
        >
          <Image
            src="/assets/halfmobile.png"
            alt="halfmobile"
            objectFit="contain"
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-contain h-auto w-full max-h-[400px]"
            width={289.691}
            height={625.179}
          />
        </motion.div>

        <div className="banner overflow-visible">
          <div className="flex flex-row content-container items-center relative">
            <motion.div
              variants={FadeIn("right", 0.6)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="w-4/12 h-96  absolute bottom-0 lg:block hidden"
            >
              <Image
                src="/assets/halfmobile.png"
                alt="halfmobile"
                objectFit="contain"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="object-contain h-auto w-full absolute bottom-0 max-h-[350px]"
                width={289.691}
                height={625.179}
              />
            </motion.div>
            <div className="w-4/12 lg:block hidden"></div>
            <motion.div
              variants={FadeIn("left", 0.6)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex flex-col flex-1 lg:ml-20"
            >
              <p className="text-heading2-bold text-light">
                Our Philippines Gateway is Live!
              </p>

              <p className="text-content-text text-light text-justify mt-5">
                Try our fully functioning MVP to compliantly access the
                Philippines market and power your business. Stay tuned for the
                new platform with rebranding!
              </p>

              <div className="flex gap-7 mt-6">
                {links.map((data, i) => (
                  <Link href={data.url} key={i}>
                    <div className="h-auto w-full items-center justify-center max-w-[170px] hover:scale-110 duration-300">
                      <Image
                        src={data.img}
                        alt={data.name}
                        objectFit="contain"
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        className="object-contain h-full w-full"
                        width={553.66}
                        height={352}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="cflex flex-col content-container items-center">
          <p className="text-heading2-bold text-dark-1">Team & Advisors From</p>

          <div className="flex gap-10 flex-wrap justify-start mt-5">
            {teamadvisor.map((data, i) => (
              <>
                <motion.div
                  variants={ListAnimate}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: false }}
                  custom={i}
                  // variants={FadeIn("down", 0.2)}
                  // initial="hidden"
                  // whileInView={"show"}
                  // viewport={{ once: false, amount: 0.4 }}
                  className="flex items-center justify-center w-auto max-h-14"
                  key={i}
                >
                  {data.name === "and more..." ? (
                    <p className=" text-heading1-semibold text-[24px] text-dark-1">
                      {data.name}
                    </p>
                  ) : (
                    <Image
                      src={data.img}
                      alt={data.name}
                      objectFit="contain"
                      priority
                      className="object-contain h-full w-full"
                      width={100}
                      height={100}
                    />
                  )}
                </motion.div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col bggradientimg items-center py-10'>
        <div className='bggradient' />
        <div className='flex flex-col content-container z-20 w-full relative flex-shrink items-start'>
          <div>
            <motion.p
              variants={FadeIn("right", 0.2)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }} className='text-heading2-semibold text-light'>First Access & Custom Solutions</motion.p>

            <motion.div
              variants={FadeIn("down", 0.2)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className='flex items-center py-2'>
              <div className="h-5 w-5 mr-2">
                <Image
                  src="/assets/web.png"
                  alt="Web"
                  objectFit='contain'
                  priority
                  className="object-contain h-full w-full"
                  width={30}
                  height={30}
                />
              </div>
              <p className='text-text-content-text text-light'>EMI, VASP and Custodian Licenses</p>
            </motion.div>

            <motion.div
              variants={FadeIn("down", 0.2)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className='flex items-center py-2'>
              <div className="h-5 w-5 mr-2">
                <Image
                  src="/assets/credit.png"
                  alt="Credit"
                  objectFit='contain'
                  priority
                  className="object-contain h-full w-full"
                  width={30}
                  height={30}
                />
              </div>
              <p className='text-text-content-text text-light'>Pre-order RAILS Card</p>
            </motion.div>

            <motion.div
              variants={FadeIn("down", 0.2)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className='flex items-center py-2'>
              <div className="h-5 w-5 mr-2">
                <Image
                  src="/assets/mobile.png"
                  alt="Mobile"
                  objectFit='contain'
                  priority
                  className="object-contain h-full w-full"
                  width={30}
                  height={30}
                />
              </div>
              <p className='text-text-content-text text-light'>Custom Integrations and White labels</p>
            </motion.div>

            <form>
            <motion.input
            type='email'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              variants={FadeIn("up", 0.2)}
              // variants=FadeAnimate("down", 0.2)
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className='w-full txtinput my-2' placeholder='Enter your email here' />


  
            <div className='my-8'>
              <motion.button
                type="submit"
                variants={FadeIn("up", 0.2)}
                // variants=FadeAnimate("down", 0.2)
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className='btn1 w-full'>
                <p className='text-btn-text-2'>
                  I'm Interested
                </p>
              </motion.button>
            </div>

            </form>
          </div>
        </div>

      </div>

    </main>
  );
}
